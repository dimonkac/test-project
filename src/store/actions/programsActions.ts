import {IProgramsReducer} from '../reducers/programsReducer';

export const FETCH_PROGRAMS = 'FETCH_PROGRAMS';
export const SUCCESS_PROGRAMS = 'SUCCESS_PROGRAMS';
export const FAILURE_PROGRAMS = 'FAILURE_PROGRAMS';
export const fetchPrograms = () => ({
  type: FETCH_PROGRAMS,
});

export const successPrograms = (data: Array<IProgramsReducer>) => ({
  type: SUCCESS_PROGRAMS,
  data,
});
