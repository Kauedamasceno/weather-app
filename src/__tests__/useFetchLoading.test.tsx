import { useLoadFetch } from "../hooks/useFetchLoading";
import { useSearchWeather } from "../hooks/useFetchCurrent";
import { describe, expect, it, vi } from "vitest";
import { renderHook } from "@testing-library/react";

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
    renderHook(() => useLoadFetch());

    expect(useSearchWeather).toHaveBeenCalledTimes(1);
  });
});
