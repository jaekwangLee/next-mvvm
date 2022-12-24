import producer from 'immer';
import { createReducer } from 'typesafe-actions';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';
import { ReviewInitialState } from './types';
import { handleAsyncActionsById } from '@redux/util';

const initialState: ReviewInitialState = {
    reviews: [],
    editReview: {
        name: '',
        password: '',
        message: ''
    },
    reviewPage: 0
};

const reviewReducer = createReducer(initialState, {
    [HYDRATE]: producer((draft, { payload }) => payload),
    // loading~~
    [actionTypes.GET_REVIEW_LIST]: producer((draft, { payload }) => {
        // console.log('DELETE_REVIEW loading: ', payload);
    }),
    [actionTypes.GET_REVIEW_LIST_SUCCESS]: producer((draft, { payload }) => {
        // console.log('success: ', payload);
        draft['reviews'] = payload.data.data;
    }),
    [actionTypes.GET_REVIEW_LIST_ERROR]: producer((draft, { payload }) => {
        // console.log('error: ', payload);
    }),

    [actionTypes.DELETE_REVIEW]: producer((draft, { payload }) => {
        // console.log('DELETE_REVIEW loading: ', payload);
    }),
    [actionTypes.DELETE_REVIEW_SUCCESS]: producer((draft, { payload, meta }) => {
        const { status, code } = payload.data;
        if (status === 'failed') {
            if (code === 'NotAuthorizedUserException') {
                window.alert('비밀번호가 잘못되었습니다.');
            }
        } else {
            window.alert('축하메시지를 삭제하였습니다.');
            draft['reviews'] = draft['reviews'].filter((review: { rvId: string }) => review.rvId !== meta.rvId);
        }
    }),
    [actionTypes.DELETE_REVIEW_ERROR]: producer((draft, { payload }) => {
        // console.log('error: ', payload);
    }),

    [actionTypes.ADD_NEW_REVIEW]: producer((draft, { payload }) => {
        // console.log('loading', payload);
    }),
    [actionTypes.ADD_NEW_REVIEW_SUCCESS]: producer((draft, { payload }) => {
        draft['reviews'] = draft['reviews'].concat([payload.data.data]);
        draft['editReview'] = {
            name: '',
            password: '',
            message: ''
        };
    }),
    [actionTypes.ADD_NEW_REVIEW_ERROR]: producer((draft, { payload }) => {
        // console.log('error', payload);
    }),

    [actionTypes.SET_REVIEW_PAGE]: producer((draft, { payload }) => {
        draft['reviewPage'] = payload;
    }),
    [actionTypes.EDIT_REVIEW]: producer((draft, { payload }) => {
        const { type, value } = payload;
        const newReview = {
            name: type === 'name' ? value : draft['editReview'].name,
            password: type === 'password' ? value : draft['editReview'].password,
            message: type === 'message' ? value : draft['editReview'].message
        };
        draft['editReview'] = newReview;
    })
});

export default reviewReducer;

export type RootState = ReturnType<typeof reviewReducer>;
