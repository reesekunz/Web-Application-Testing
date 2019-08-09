import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import DisplayScoreboard from "./DisplayScoreboard"

describe("<DisplayScoreboard />", () => {
    it('renders "Display Scoreboard', () => {
    expect(getByLabelText(/Baseball Scoreboard/i));
  });
});