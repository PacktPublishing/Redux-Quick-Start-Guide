const calculateBill = require("../calculateBill");

test("calculate bills when number of hours and hourly rate are provided.", () => {
  expect(calculateBill(10, 40)).toBe(400);
});
