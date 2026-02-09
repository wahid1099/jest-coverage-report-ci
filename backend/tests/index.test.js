const { calculateDiscount, validateEmail } = require("../src/index");

describe("calculateDiscount", () => {
  test("calculates 10% discount correctly", () => {
    expect(calculateDiscount(100, 10)).toBe(90);
  });

  test("calculates 50% discount correctly", () => {
    expect(calculateDiscount(200, 50)).toBe(100);
  });

  test("throws error for negative percentage", () => {
    expect(() => calculateDiscount(100, -10)).toThrow();
  });

  test("throws error for percentage > 100", () => {
    expect(() => calculateDiscount(100, 101)).toThrow();
  });
});

describe("validateEmail", () => {
  test("validates correct email", () => {
    expect(validateEmail("test@example.com")).toBe(true);
  });

  test("rejects email without @", () => {
    expect(validateEmail("testexample.com")).toBe(false);
  });

  test("rejects email without domain", () => {
    expect(validateEmail("test@")).toBe(false);
  });
});
