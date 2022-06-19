import {all} from 'redux-saga/effects';
import {watchProgramsSaga} from './programsSaga';

export default function* rootSaga() {
  yield all([watchProgramsSaga()]);
}
