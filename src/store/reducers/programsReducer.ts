interface IAction {
  type: string;
  data: IProgramsReducer;
}

export interface IProgramsReducer {
  userId: number | null;
  id: number | null;
  title: string;
  body: string;
}

const initialState: IProgramsReducer = {
  userId: null,
  id: null,
  title: '',
  body: '',
};

const programsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default programsReducer;
