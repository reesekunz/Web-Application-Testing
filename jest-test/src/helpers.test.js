const help = require('./helpers');

describe('sum function', () => {
    it('sum of 2', () => {
    //   const expected = 3;
    //   const actual = help.sum(1, 2);
    //   expect(actual).toBe(expected); // .toBe() looks for strict equality!

      expect(help.sum(1,2)).toBe(3);

    });
}); 

