import {all, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/programsActions';
import axios from 'axios';
import {isLoad} from '../actions/authActions';
import {Alert} from 'react-native';
import {IComent} from '../reducers/programsReducer';

export function* programsSaga() {
  try {
    // @ts-ignore
    const response = yield axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    if (response.data) {
      yield put(actions.successPosts(response.data));
      yield put(isLoad(false));
    }
  } catch (error) {
    yield put(isLoad(false));
    function* requst() {
      yield put(actions.fetchPosts());
    }
    Alert.alert('error request', 'Please try again.', [
      {
        text: 'repeat request',
        onPress: () => {
          requst();
        },
      },
    ]);
    console.log(error);
  }
}

export function* commentsSaga(data: any) {
  try {
    // @ts-ignore
    const response = yield axios.get(
      'https://jsonplaceholder.typicode.com/comments',
    );
    if (response.data) {
      const postComments = response.data.filter(
        (comment: IComent) => comment.postId === data.data.id,
      );
      yield put(actions.successComments(postComments));
    }
  } catch (error) {
    yield put(actions.loader(false));
    // @ts-ignore
    yield put(actions.failureComments(error.message));
    console.log(error);
  }
}

export function* watchProgramsSaga() {
  yield all([takeLatest(actions.FETCH_POSTS as any, programsSaga)]);
  yield all([takeLatest(actions.FETCH_COMMENTS as any, commentsSaga)]);
}
