import React from "react";
import { render } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("SearchBox tests", () => {
  it("should render", () => {
    expect(render(<SearchBox />)).toBeTruthy();
  });
});
