import { render } from "@testing-library/react";
import { SearchContext } from "../Context/SearchContext";
import { ReactNode } from "react";
import { vi } from "vitest";

export const mock = vi.fn();

export const ContextRender = (children: ReactNode) => {
  return render(
    <SearchContext.Provider
      value={{
        search: {
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
        },
        setSearch: mock,
      }}
    >
      {children}
    </SearchContext.Provider>,
  );
};
