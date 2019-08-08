import React from "react";
import { render, fireEvent, waitforElement } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Update from "./UpdateScoreboard";


it("updates scoreboard", () => {
  const { getByTestId } = render(<Update />);
  expect(getByTestId("count")).toHaveTextContent("0");
});
