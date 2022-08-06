import fibsRec from "./fibsRec";

describe("fibsRec", () => {
  it("returns the array from 0 to nth fibonacci number", () => {
    expect(fibsRec(0)).toEqual([0]);
    expect(fibsRec(1)).toEqual([0, 1]);
    expect(fibsRec(2)).toEqual([0, 1, 1]);
    expect(fibsRec(3)).toEqual([0, 1, 1, 2]);
    expect(fibsRec(4)).toEqual([0, 1, 1, 2, 3]);
    expect(fibsRec(5)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibsRec(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibsRec(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  })
} );