import { ResponsMockAPIFlights, ResponsMockAPIFlightWrapper, ResponsMockAPILeg } from '../types/api/mock';
import { CarriersFiltersState, FiltersState } from '../types/flights/state';

export function FlightsFilterDefault(flights: ResponsMockAPIFlights): ResponsMockAPIFlights {
  return flights.map((e: ResponsMockAPIFlightWrapper) => {
    e.show = true;
    return e;
  });
}

function getShowFilterTransfer(
  flight: ResponsMockAPIFlightWrapper,
  NoTransfer: boolean,
  OneTransfer: boolean,
): boolean {
  // Если фильтров нет = false, значит show будет true
  if (!NoTransfer && !OneTransfer) return true;

  // Если один из группы фильтров наложен = true, значит show будет результатом выполнения условий этого фильтра
  const showNoTransfer: boolean = NoTransfer
    ? !flight.flight.legs.some((leg: ResponsMockAPILeg) => leg.segments.length > 1) // some вернёт true, если есть хотя бы одна пересадка
    : false;

  const showOneTransfer: boolean = OneTransfer
    ? !flight.flight.legs.some((leg: ResponsMockAPILeg) => leg.segments.length !== 2)
    : false;

  return showNoTransfer || showOneTransfer; // в рамках группы условие ИЛИ
}

function getShowFilterPriceFromTo(flight: ResponsMockAPIFlightWrapper, priceFrom: number, priceTo: number): boolean {
  return Number.isNaN(flight.flight.price.total.amount)
    ? false
    : Number(flight.flight.price.total.amount) >= priceFrom && Number(flight.flight.price.total.amount) <= priceTo;
}

function getShowFilterCarriers(flight: ResponsMockAPIFlightWrapper, carriers: CarriersFiltersState): boolean {
  // console.log(carriers);
  if (carriers.length === 0) return true;
  for (const carrier of carriers) {
    if (carrier === flight.flight.carrier.uid) return true;
  }

  return false;
}

export function FlightsFilter(flights: ResponsMockAPIFlights, filters: FiltersState): ResponsMockAPIFlights {
  return flights.map((e: ResponsMockAPIFlightWrapper) => ({
    ...e,
    show:
      getShowFilterTransfer(e, filters.NoTransfer, filters.OneTransfer) &&
      getShowFilterPriceFromTo(e, filters.PriceFrom, filters.PriceTo) &&
      getShowFilterCarriers(e, filters.Carriers),
  }));

  // return flights;
}
