import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import app from './app';
import wedding, { weddingSaga } from './wedding';

const rootReducer = combineReducers({ app, wedding });

export function* rootSaga() {
    yield all([weddingSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
