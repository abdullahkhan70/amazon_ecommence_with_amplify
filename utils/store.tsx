import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {reducer} from './reducer';
import {rootSaga} from './sagas/rootSaga';
const reduxSagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(reduxSagaMiddleware, logger),
});

reduxSagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
