import { createPromiseSaga, createPromiseSagaById } from '@redux/util';
import { getWeddingById, getWeddingPages } from 'api/wedding';
import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'typesafe-actions';

export const actionTypes = {
    GET_WEDDING_PAGE_LIST: 'wedding/GET_WEDDING_PAGE_LIST',
    GET_WEDDING_INFO: 'wedding/GET_WEDDING_INFO',
    GET_WEDDING_INFO_SUCCESS: 'wedding/GET_WEDDING_INFO_SUCCESS',
    GET_WEDDING_INFO_ERROR: 'wedding/GET_WEDDING_INFO_ERROR',

    SET_WEDDING_COUPLE_ID: 'wedding/SET_WEDDING_COUPLE_ID',
    SET_WEDDING_GALLERY_INDEX: 'wedding/SET_WEDDING_GALLERY_INDEX'
};

// actions
export const setWeddingId = createAction(actionTypes.SET_WEDDING_COUPLE_ID, id => id)();
export const getPageList = () => ({ type: actionTypes.GET_WEDDING_PAGE_LIST });
export const getWedding = (id: string) => ({ type: actionTypes.GET_WEDDING_INFO, payload: id, meta: id });

// saga
export const getPageListSaga = createPromiseSaga(actionTypes.GET_WEDDING_PAGE_LIST, getWeddingPages);
export const getWeddingSaga = createPromiseSagaById(actionTypes.GET_WEDDING_INFO, getWeddingById);

export function* weddingSaga() {
    yield takeEvery(actionTypes.GET_WEDDING_PAGE_LIST, getPageList);
    yield takeEvery(actionTypes.GET_WEDDING_INFO, getWeddingSaga);
}
