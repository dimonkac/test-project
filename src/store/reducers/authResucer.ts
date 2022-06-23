import * as types from '../actions/authActions';
interface IAction {
  type: string;
  data: IAuthReducer;
}

export interface IAuthReducer {
  email: string;
  password: string;
  authorized: boolean;
  load: boolean;
}

const initialState: IAuthReducer = {
  email: '',
  password: '',
  authorized: false,
  load: false,
};

const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.SET_EMAIL: {
      return {
        ...state,
        email: action.data,
      };
    }
    case types.SET_PASSWORD: {
      return {
        ...state,
        password: action.data,
      };
    }
    case types.AUTHORIZED: {
      return {
        ...state,
        authorized: !state.authorized,
      };
    }
    case types.LOAD: {
      return {
        ...state,
        load: action.data,
      };
    }
    case types.LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
