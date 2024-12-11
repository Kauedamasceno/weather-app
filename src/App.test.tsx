import { describe, it, expect, test } from "vitest";

import App from "./App";

import { ContextRender } from "./__tests__/renderTest";

test("demo", () => {
  expect(true).toBe(true);
});

describe("render", () => {
  it("renders the main page", () => {
    ContextRender(<App />);
    expect(true).toBeTruthy();
  });
});
