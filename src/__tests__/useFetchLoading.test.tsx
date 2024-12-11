import { useLoadFetch } from "../hooks/useFetchLoading";
import { useSearchWeather } from "../hooks/useFetchCurrent";
import { describe, expect, it, Mock, vi } from "vitest";
import { renderHook } from "@testing-library/react";

const data = {
  weather: [
    {
      id: 0,
      main: "",
      description: "",
      icon: "",
    },
  ],
  main: {
    temp: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
  },
  wind: {
    speed: 0,
  },
  clouds: {
    all: 0,
  },
  name: "",
};
// // Mock do hook `useSearchWeather`
vi.mock("../hooks/useFetchCurrent", () => ({
  useSearchWeather: vi.fn(),
}));

// vi.mock('../hooks/useFetchCurrent', () => ({
//   useSearchWeather: vi.fn(() => {
//     Promise.resolve({
//       json: Promise.resolve(data)
//     })
//   }),
// }));

describe("useLoadFetch", () => {
  it("oi", () => {
    const useSearchWeatherMock = (useSearchWeather as Mock).mockImplementation(
      () => data,
    );
    renderHook(() => useLoadFetch());

    expect(useSearchWeather).toHaveBeenCalledTimes(1);
  });
});
