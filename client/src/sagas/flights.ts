import { takeEvery, put, all, call, AllEffect, CallEffect, PutEffect } from 'redux-saga/effects';
import { FlightsAction } from '../types/flights/action';
import { FLIGHTS_LOAD } from '../const/flights/actions';
import Action from '../types/action';
import { GetDataMockApi } from '../api/mockAPI';
import { ResponsMockAPI } from '../types/api/mock';
import { flightsSuccessAction } from '../actions/flights';

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
        // const post: PostFullType = {};
        // post.id = "228";
        // yield put(preloadOnAction()); // показать прелоадер
        // const [post, comments] = yield all([
        //   call(getPost, params.id as string),
        //   call(getCommetsByPost, params.id as string),
        // ]);

        // yield put(postLoadActionSuccess(post));

        // yield put(preloadOffAction()); // скрыть прелоадер
        break;
      }
      default:
    }
  } catch (e: any) {
    console.log(e);
    // console.log(e.name.toString().concat(' - ').concat(e.message.toString()));
    // yield put(ErrorOnAction(e.name.toString().concat(' - ').concat(e.message.toString())));
    // yield put(preloadOffAction()); // скрыть прелоадер
  }
}

export default function* flightsWatcher() {
  yield takeEvery(FLIGHTS_LOAD, flightsLoad);
}
