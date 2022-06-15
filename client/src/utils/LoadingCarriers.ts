import {
  ResponsMockAPICarriers,
  ResponsMockAPIFlights,
  ResponsMockAPIFlightWrapper,
  ResponsMockAPICarrier,
} from '../types/api/mock';

export function LoadingCarriers(flights: ResponsMockAPIFlights): ResponsMockAPICarriers {
  return flights
    .map((e: ResponsMockAPIFlightWrapper) => e.flight.carrier)
    .filter((carrier: ResponsMockAPICarrier, index: number, carriers: ResponsMockAPICarriers) => {
      // if (index === 0) return true;
      for (let i = 0; i < index; i++) {
        if (carrier.uid === carriers[i].uid) {
          return false;
        }
      }
      return true;
    })
    .map((carrier: ResponsMockAPICarrier) => {
      // находим минимальную цену у перевозчика
      const minPrice: number = Math.min(
        ...flights
          .filter((flight: ResponsMockAPIFlightWrapper) => flight.flight.carrier.uid === carrier.uid)
          .map((flight: ResponsMockAPIFlightWrapper) => {
            // Line 25:16:  Arrow function used ambiguously with a conditional expression  no-confusing-arrow
            // prettier меняет на стрелку, а eslint весь запутался от неоднозначности
            const tmp: number = Number.isNaN(flight.flight.price.total.amount)
              ? 0
              : Number(flight.flight.price.total.amount);
            return tmp;
          }),
      );

      return {
        ...carrier,
        minPrice,
      };
    });
}
