import React, { ReactElement } from 'react';
import './FlightBody.scss';
import { ResponsMockAPILeg, ResponsMockAPILegs, ResponsMockAPISegment } from '../../../../../types/api/mock';
import { GetDate, GetDuration, GetTime } from '../../../../../utils/DateTimeUtils';
import TransferLine from './TransferLine/TransferLine';

interface Props {
  classParent: string;
  legs: ResponsMockAPILegs;
}

function FlightBody({ classParent, legs }: Props): ReactElement {
  return (
    <div className={`${classParent} flight-body`}>
      {legs.map((e: ResponsMockAPILeg, index: number) => {
        const countSegments: number = e.segments.length;

        if (countSegments > 0) {
          const departureSegment: ResponsMockAPISegment = e.segments[0];
          const arrivalSegment: ResponsMockAPISegment = e.segments[countSegments - 1];

          return (
            <div key={e.duration + index} className="leg">
              <div className="leg__header">
                {departureSegment.departureCity ? departureSegment.departureCity.caption.concat(', ') : ''}
                {departureSegment.departureAirport.caption}
                <span className="leg__uid-airport"> ({departureSegment.departureAirport.uid})</span>
                <span className="leg__arrow"> ⟶ </span>
                {arrivalSegment.arrivalCity ? arrivalSegment.arrivalCity.caption.concat(', ') : ''}
                {arrivalSegment.arrivalAirport.caption}
                <span className="leg__uid-airport"> ({arrivalSegment.arrivalAirport.uid})</span>
              </div>

              <div className="leg__body time">
                <div className="time__departure">
                  <span className="time__date-part-time">{GetTime(departureSegment.departureDate)}</span>{' '}
                  <span className="time__date-part-date">{GetDate(departureSegment.departureDate)}</span>
                </div>
                <div className="time__duration">🕔 {GetDuration(e.duration)}</div>
                <div className="time__arrival">
                  <span className="time__date-part-date">{GetDate(arrivalSegment.arrivalDate)}</span>{' '}
                  <span className="time__date-part-time">{GetTime(arrivalSegment.arrivalDate)}</span>
                </div>
              </div>

              <div className="leg__footer">
                {countSegments > 1 ? <TransferLine transferCount={countSegments - 1} /> : null}
                <p className="leg__airline">Рейс выполняет: {departureSegment.airline.caption}</p>
              </div>
            </div>
          );
        }

        return <div />;
      })}
    </div>
  );
}

export default FlightBody;
