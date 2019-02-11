jest.useFakeTimers();

test("waits 2 second before taking the x-ray", () => {
  const takeXray = require("../time");
  takeXray();

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);
});
