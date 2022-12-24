import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import app from './app';
import wedding, { weddingSaga } from './wedding';
import review, { reviewSaga } from './review';

const rootReducer = combineReducers({ app, wedding, review });

export function* rootSaga() {
    yield all([weddingSaga(), reviewSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
