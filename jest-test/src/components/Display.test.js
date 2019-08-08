import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import DisplayScoreboard from "./DisplayScoreboard"

it('renders "Display Scoreboard', () => {
    expect(wrapper.getByLabelText(/baseball scoreboard/i));
  });