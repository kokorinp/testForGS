import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import flightsReducer from '../reducers/flights';
import flightsWatcher from '../sagas/flights';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    flights: flightsReducer,
  }),
  applyMiddleware(sagaMiddleware),
);

function* rootSaga() {
  yield all([fork(flightsWatcher)]);
}
sagaMiddleware.run(rootSaga);

export default store;
