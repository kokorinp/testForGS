import React, { ReactElement } from 'react';
import './FlightHeader.scss';
import { ResponsMockAPICarrier, ResponsMockAPIPriceTotal } from '../../../../../types/api/mock';

interface Props {
  classParent: string;
  carrier: ResponsMockAPICarrier;
  price: ResponsMockAPIPriceTotal;
}

function FlightHeader({ classParent, carrier, price }: Props): ReactElement {
  return (
    <div className={`${classParent} flight-header`}>
      <div className="flight-header__airline-logo">{carrier.caption}</div>
      <div className="flight-header__price-block">
        <p className="flight-header__price">{price.amount} ₽</p>
        <p className="flight-header__price-descr">Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  );
}

export default FlightHeader;
