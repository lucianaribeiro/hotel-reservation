export const getReservationDays = (input) => {
  const days = getDays(input);

  return countWeekDaysByTypes(days);
};

export const getCustomerType = (input) => {
  return input.split(":")[0];
};

const getDays = (input) => {
  const regexp = /\(.*?\)/g;
  const splittedInput = input
    .match(regexp)
    .map((el) => el.replace(/[()]/g, ""));

  return splittedInput;
};

const countWeekDaysByTypes = (days) => {
  const weekendDays = ["sat", "sun"];
  return days.reduce(
    (reservedDays, day) => {
      if (weekendDays.includes(day)) {
        reservedDays.weekends++;
      } else {
        reservedDays.weekdays++;
      }
      return reservedDays;
    },
    {
      weekends: 0,
      weekdays: 0,
    }
  );
};
