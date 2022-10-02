import producer from 'immer';
import { createReducer } from 'typesafe-actions';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';
import { WeddingInitialState } from './types';
import { handleAsyncActionsById } from '@redux/util';

const initialState: WeddingInitialState = {
    info: undefined,
    coupleId: '',
    galleryIndex: 0
};

const appReducer = createReducer(initialState, {
    [HYDRATE]: producer((draft, { payload }) => payload),
    // loading~~
    [actionTypes.GET_WEDDING_INFO]: producer((draft, { payload }) => {
        console.log('loading: ', payload);
    }),
    [actionTypes.GET_WEDDING_INFO_SUCCESS]: producer((draft, { payload }) => {
        console.log('success: ', payload);
        draft['info'] = payload.data.data;
    }),
    [actionTypes.GET_WEDDING_INFO_ERROR]: producer((draft, { payload }) => {
        console.log('error: ', payload);
    }),
    [actionTypes.SET_WEDDING_GALLERY_INDEX]: producer((draft, { payload }) => {
        draft['galleryIndex'] = payload;
    }),
    [actionTypes.SET_WEDDING_COUPLE_ID]: producer((draft, { payload }) => {
        draft['coupleId'] = payload;
    })
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
