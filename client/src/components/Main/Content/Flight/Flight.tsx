import React, { ReactElement } from 'react';
import './Flight.scss';
import {
  ResponsMockAPICarrier,
  ResponsMockAPIFlight,
  ResponsMockAPILegs,
  ResponsMockAPIPriceTotal,
} from '../../../../types/api/mock';
import FlightHeader from './FlightHeader/FlightHeader';
import FlightBody from './FlightBody/FlightBody';

interface Props {
  flight: ResponsMockAPIFlight;
  classParent: string;
  carrier: ResponsMockAPICarrier;
  price: ResponsMockAPIPriceTotal;
  legs: ResponsMockAPILegs;
}

function Flight({ flight, classParent, carrier, price, legs }: Props): ReactElement {
  // console.log(flight);
  // console.log(carrier);
  // console.log(price);
  // console.log(legs);

  return (
    <div className={`${classParent} flight`}>
      <FlightHeader classParent="flight__header" carrier={carrier} price={price} />
      <FlightBody classParent="flight__body" legs={legs} />
      <div className="flight__footer">
        <button className="flight__button" type="button">
          Выбрать
        </button>
      </div>
    </div>
  );
}

export default Flight;
