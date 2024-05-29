import { getCustomerType, getReservationDays } from "../utils/input";

test("should return how many week and weekend days for reservation", () => {
  const reservationInput =
    "Regular: 16Mar2009(sun), 17Mar2009(tues), 18Mar2009(wed)";

  const reservationDays = getReservationDays(reservationInput);
  const expectedResult = {
    weekends: 1,
    weekdays: 2,
  };
  expect(reservationDays).toEqual(expectedResult);
});

test("should return the customer type", () => {
  const reservationInput =
    "Regular: 16Mar2009(sun), 17Mar2009(tues), 18Mar2009(wed)";

  const customerType = getCustomerType(reservationInput);

  const expectedResult = "Regular";

  expect(customerType).toBe(expectedResult);
});
