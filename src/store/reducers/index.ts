import {applyMiddleware, combineReducers} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import authReducer, {IAuthReducer} from './authResucer';
import mockUserReducer from './mockUsers';
import programsReducer, {IProgramsReducer} from './programsReducer';

export interface IRootReducer {
  programsReducer: IProgramsReducer;
  authReducer: IAuthReducer;
}

const rootReducer = combineReducers({
  authReducer,
  programsReducer,
  mockUserReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
