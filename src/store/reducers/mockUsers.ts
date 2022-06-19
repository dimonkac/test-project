// interface IUsers {
//   users: Array<IUser>;
// }
export interface IUsers {
  email: string;
  password: string;
}
const initialState: Array<IUsers> = [
  {email: 'qwerty@gmail.com', password: '123456'},
  {email: 'qwerty@gmail.com', password: '123456'},
  {email: 'qwerty@gmail.com', password: '123456'},
  {email: 'qwerty@gmail.com', password: '123456'},
];
const mockUserReducer = (state = initialState) => {
  return state;
};

export default mockUserReducer;
