import * as types from '../actions/programsActions';
interface IAction {
  type: string;
  data: IProgramsReducer;
}

export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComent {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IProgramsReducer {
  posts: Array<IPosts> | null;
  coments: Array<IComent> | null;
  errorMesage: string | null;
  loadProgram: boolean;
}

const initialState: IProgramsReducer = {
  posts: [],
  coments: [],
  loadProgram: false,
  errorMesage: null,
};

const programsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case types.SUCCESS_POSTS: {
      return {
        ...state,
        posts: action.data,
      };
    }
    case types.LOAD: {
      return {
        ...state,
        loadProgram: action.data,
      };
    }
    case types.SUCCESS_COMMENTS: {
      return {
        ...state,
        coments: action.data,
        loadProgram: false,
      };
    }
    case types.FAILURE_COMMENTS: {
      return {
        ...state,
        errorMesage: action.data,
      };
    }
    default:
      return state;
  }
};

export default programsReducer;
