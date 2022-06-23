export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_EMAIL = 'SET_EMAIL';
export const AUTHORIZED = 'AUTHORIZED';
export const LOGOUT = 'LOGOUT';
export const LOAD = 'LOAD';

export const setEmail = (data: string) => ({
  type: SET_EMAIL,
  data,
});
export const setPassword = (data: string) => ({
  type: SET_PASSWORD,
  data,
});
export const setAuthorized = () => ({type: AUTHORIZED});
export const logOut = () => ({type: LOGOUT});
export const isLoad = (data: boolean) => ({type: LOAD, data});
