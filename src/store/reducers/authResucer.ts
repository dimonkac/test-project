interface IAction {
  type: string;
  data: IAuthReducer;
}

export interface IAuthReducer {
  email: string;
  password: string;
}

const initialState: IAuthReducer = {
  email: '',
  password: '',
};

const authReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
