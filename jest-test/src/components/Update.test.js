import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import Update from "./UpdateScoreboard";

describe('Update Scoreboard', () => {
    it("updates the button counters", () => {
    const { getByTestId } = render(<Update />);
    const button = getByTestId('button')
    expect(button).toHaveTextContent("0");
  });

});
