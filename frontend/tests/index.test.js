const { formatCurrency, truncateText, formatDate } = require("../src/index");

describe("formatCurrency", () => {
  test("formats currency correctly", () => {
    expect(formatCurrency(100)).toBe("$100.00");
  });

  test("formats large currency correctly", () => {
    expect(formatCurrency(1000.5)).toBe("$1,000.50");
  });
});

describe("truncateText", () => {
  test("truncates text correctly", () => {
    expect(truncateText("Hello World", 5)).toBe("Hello...");
  });

  test("does not truncate if text is shorter", () => {
    expect(truncateText("Hi", 5)).toBe("Hi");
  });

  test("truncates at exact length", () => {
    expect(truncateText("Hello", 5)).toBe("Hello");
  });
});

describe("formatDate", () => {
  test("formats date correctly", () => {
    const date = "2024-01-15";
    const result = formatDate(date);
    expect(result).toContain("2024");
  });
});
