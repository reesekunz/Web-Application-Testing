import { add } from "./helpers";

describe("helpers.js", () => {
  describe("sum function", () => {
    it("sums two integers", () => {
      // expect - .toBe() looks for strict equality
      expect(add(2, 2)).toBe(2);
      expect(add(2, 3)).toBe(5);

      //   const expected = 3;
      //   const actual = help.sum(1, 2);
      //   expect(actual).toBe(expected);
    });
  });
});
