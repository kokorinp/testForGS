import { ResponsMockAPIFlights, ResponsMockAPIFlightWrapper, ResponsMockAPILeg } from '../types/api/mock';

export default function FlightsSort(flights: ResponsMockAPIFlights, typeSort: number): ResponsMockAPIFlights {
  switch (typeSort) {
    case 1: // по возрастанию цены
      return flights.sort(
        (a: ResponsMockAPIFlightWrapper, b: ResponsMockAPIFlightWrapper) =>
          Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount),
      );
    case 2: // по убыванию цены
      return flights.sort(
        (a: ResponsMockAPIFlightWrapper, b: ResponsMockAPIFlightWrapper) =>
          Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount),
      );
    case 3: // по времени в пути
      return flights.sort(
        (a: ResponsMockAPIFlightWrapper, b: ResponsMockAPIFlightWrapper) =>
          a.flight.legs.reduce((acc: number, e: ResponsMockAPILeg) => acc + e.duration, 0) -
          b.flight.legs.reduce((acc: number, e: ResponsMockAPILeg) => acc + e.duration, 0),
      );
    default:
      return flights;
  }
}
