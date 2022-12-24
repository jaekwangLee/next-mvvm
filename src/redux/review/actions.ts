import { createPromiseSaga, createPromiseSagaById } from '@redux/util';
import { getWeddingReviews, addWeddingReview, deleteWeddingReview } from 'api/review';
import { takeEvery } from 'redux-saga/effects';
import { createAction } from 'typesafe-actions';
import { Review } from './types';

export const actionTypes = {
    GET_REVIEW_LIST: 'review/GET_REVIEW_LIST',
    GET_REVIEW_LIST_SUCCESS: 'review/GET_REVIEW_LIST_SUCCESS',
    GET_REVIEW_LIST_ERROR: 'review/GET_REVIEW_LIST_ERROR',

    SET_REVIEW_PAGE: 'review/SET_REVIEW_PAGE',
    EDIT_REVIEW: 'review/EDIT_REVIEW',

    ADD_NEW_REVIEW: 'review/ADD_NEW_REVIEW',
    ADD_NEW_REVIEW_SUCCESS: 'review/ADD_NEW_REVIEW_SUCCESS',
    ADD_NEW_REVIEW_ERROR: 'review/ADD_NEW_REVIEW_ERROR',

    DELETE_REVIEW: 'review/DELETE_REVIEW',
    DELETE_REVIEW_SUCCESS: 'review/DELETE_REVIEW_SUCCESS',
    DELETE_REVIEW_ERROR: 'review/DELETE_REVIEW_ERROR'
};

// actions
export const getReviewList = (couId: string) => ({ type: actionTypes.GET_REVIEW_LIST, payload: couId, meta: couId });
export const addReview = (initCouId: string, review: Review) => ({
    type: actionTypes.ADD_NEW_REVIEW,
    payload: { initCouId, review },
    meta: { initCouId, review }
});
export const deleteReview = (rvId: string, password: string) => ({
    type: actionTypes.DELETE_REVIEW,
    payload: { rvId, password },
    meta: { rvId, password }
});
export const updateNewReviewState = createAction(actionTypes.EDIT_REVIEW, ({ type, value }) => ({ type, value }))();
export const updateReviewPageState = createAction(actionTypes.SET_REVIEW_PAGE, page => page)();

//saga
export const getReviewListSaga = createPromiseSaga(actionTypes.GET_REVIEW_LIST, getWeddingReviews);
export const addReviewSaga = createPromiseSaga(actionTypes.ADD_NEW_REVIEW, addWeddingReview);
export const deleteReviewSaga = createPromiseSaga(actionTypes.DELETE_REVIEW, deleteWeddingReview);

export function* reviewSaga() {
    yield takeEvery(actionTypes.ADD_NEW_REVIEW, addReviewSaga);
    yield takeEvery(actionTypes.GET_REVIEW_LIST, getReviewListSaga);
    yield takeEvery(actionTypes.DELETE_REVIEW, deleteReviewSaga);
}
