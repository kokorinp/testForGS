import { takeEvery, put, all, call, AllEffect, CallEffect, PutEffect } from 'redux-saga/effects';
import { FlightsAction } from '../types/flights/action';
import { FLIGHTS_LOAD } from '../const/flights/actions';
import Action from '../types/action';
import { GetDataMockApi } from '../api/mockAPI';
import { ResponsMockAPI } from '../types/api/mock';
import { flightsSortAction, flightsSuccessAction } from '../actions/flights';

function* flightsLoad(
  params: FlightsAction,
): Generator<AllEffect<CallEffect<any>> | CallEffect<any> | PutEffect<Action>, void, ResponsMockAPI> {
  try {
    switch (params.type) {
      case FLIGHTS_LOAD: {
        // console.log('SAGA FLIGHTS_LOAD');
        const flights = yield call(GetDataMockApi);
        // console.log(flights);
        yield put(flightsSuccessAction(flights as ResponsMockAPI));
        yield put(flightsSortAction(1));

        break;
      }
      default:
    }
  } catch (e: any) {
    console.log(e);
  }
}

export default function* flightsWatcher() {
  yield takeEvery(FLIGHTS_LOAD, flightsLoad);
}
