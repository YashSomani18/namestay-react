import { sum } from "../sum";

// it gives the string -> description of the test
test("Sum fn should calc sum of 2 numbers ", () => {
  const result = sum(3, 4);

  // Assertion
  expect(result).toBe(7);
});
