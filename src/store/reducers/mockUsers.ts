export interface IUsers {
  email: string;
  password: string;
}
const initialState: Array<IUsers> = [
  {email: 'qwerty@gmail.com', password: '123456'},
  {email: 'Qwerty@gmail.com', password: '123123'},
  {email: 'asdf@gmail.com', password: '121212'},
  {email: 'Asdfasdf@gmail.com', password: '111111'},
];
const mockUserReducer = (state = initialState) => {
  return state;
};

export default mockUserReducer;
