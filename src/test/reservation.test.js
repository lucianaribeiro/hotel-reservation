import { getCustomerType, getReservationDays } from "../utils/input";
import { getHotelRecommendation } from "../utils/reservation";

test("should return the cheapest hotel", () => {
  const reservationInput =
    "Regular: 16Mar2009(sun), 17Mar2009(tues), 18Mar2009(wed)";

  const reservationDays = getReservationDays(reservationInput);
  const customerType = getCustomerType(reservationInput);

  const recommendedHotel = getHotelRecommendation(
    reservationDays,
    customerType
  );

  const expectedResult = "Lakewood";

  expect(recommendedHotel).toBe(expectedResult);
});

test("should return the cheapest hotel with highest rate", () => {
  const reservationInput =
    "Rewards: 26Mar2009(thur), 27Mar2009(fri), 28Mar2009(sat)";

  const reservationDays = getReservationDays(reservationInput);
  const customerType = getCustomerType(reservationInput);

  const recommendedHotel = getHotelRecommendation(
    reservationDays,
    customerType
  );

  const expectedResult = "Ridgewood";

  expect(recommendedHotel).toBe(expectedResult);
});
