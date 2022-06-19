import {all, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/programsActions';
import axios from 'axios';

export function* programsSaga() {
  try {
    // @ts-ignore
    const response = yield axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    if (response.data) {
      console.log('saga response', response);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* watchProgramsSaga() {
  yield all([takeLatest(actions.FETCH_PROGRAMS as any, programsSaga)]);
}
