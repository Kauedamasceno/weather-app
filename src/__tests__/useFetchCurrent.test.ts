import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { useSearchWeather } from "../hooks/useFetchCurrent";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
const searchKey = import.meta.env.VITE_KEY_WEATHER_API;
const searchInput = "Planaltino";

export const dataMock = {
  search: {
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    main: {
      temp: 25,
      temp_min: 30,
      temp_max: 10,
      humidity: 100,
    },
    wind: {
      speed: 3,
    },
    clouds: {
      all: 100,
    },
    name: "Planaltino",
  },
};

export const restHandlers = [
  http.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${searchKey}&units=metric`,
    () => {
      return HttpResponse.json(dataMock);
    },
  ),
];

const server = setupServer(...restHandlers);

describe("useSearchWeather", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

  afterAll(() => server.close());

  afterEach(() => server.resetHandlers());

  it("should fetch a data", async () => {
    const test = await useSearchWeather({ searchInput: "Planaltino" });
    expect(test).toEqual(dataMock);
  });

  it("should handle 404 error", async () => {
    server.use(
      http.get(
        "https://api.openweathermap.org/data/2.5/weather?q=nonexistent&appid=${searchKey}&units=metric",
        () => {
          return new HttpResponse(null, {
            status: 404,
            statusText: "City not found",
          });
        },
      ),
    );
    const test = await useSearchWeather({ searchInput: "Planaltino" });
    expect(test).toBe("City not found");
  });
});
