import {IPosts, IProgramsReducer} from '../reducers/programsReducer';

export const FETCH_POSTS = 'FETCH_POSTS';
export const SUCCESS_POSTS = 'SUCCESS_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const successPosts = (data: Array<IProgramsReducer>) => ({
  type: SUCCESS_POSTS,
  data,
});

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const SUCCESS_COMMENTS = 'SUCCESS_COMMENTS';
export const FAILURE_COMMENTS = 'FAILURE_COMMENTS';
export const LOAD = 'LOAD';
export const loader = (data: boolean) => ({
  type: LOAD,
  data,
});
export const fetchComents = (data: IPosts) => ({
  type: FETCH_COMMENTS,
  data,
});
export const successComments = (data: Array<any>) => ({
  type: SUCCESS_COMMENTS,
  data,
});

export const failureComments = (data: string) => ({
  type: FAILURE_COMMENTS,
  data,
});
