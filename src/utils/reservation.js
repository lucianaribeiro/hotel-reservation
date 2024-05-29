import { hotelsData } from "../data/hotelsData";

export const getHotelRecommendation = (days, customer) => {
  const priceByHotel = getPriceByHotel(days, customer);

  const recommendation = getRecommendation(priceByHotel);

  return recommendation.hotel;
};

const getPriceByHotel = (days, customerType) => {
  const { weekdays, weekends } = days;
  const customer = customerType.toLowerCase();

  return hotelsData.reduce((priceByHotel, hotel) => {
    const priceWeekdays = hotel.weekdays[customer] * weekdays;
    const priceWeekends = hotel.weekends[customer] * weekends;
    const hotelName = hotel.name;
    priceByHotel[hotelName] = priceWeekdays + priceWeekends;
    return priceByHotel;
  }, []);
};

const updateRecommendation = (hotel, price) => {
  return { hotel: hotel.name, price: price, rate: hotel.rate };
};

const getRecommendation = (priceByHotel) => {
  const initialValue = {
    hotel: "",
    price: 0,
    rate: 0,
  };
  return hotelsData.reduce((recommendation, hotel) => {
    const price = priceByHotel[hotel.name];
    const isInitialOrLowestPrice =
      recommendation == initialValue || price < recommendation?.price;
    const isPriceDraw =
      price === recommendation.price && recommendation.rate < hotel.rate;

    if (isInitialOrLowestPrice || isPriceDraw) {
      recommendation = updateRecommendation(hotel, price);
    }
    return recommendation;
  }, initialValue);
};
