import producer from 'immer';
import { createReducer } from 'typesafe-actions';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';
import { AppInitialState } from './types';

const initialState: AppInitialState = {
    galleryModal: false,
    accountModal: false
};

const appReducer = createReducer(initialState, {
    [HYDRATE]: producer((draft, { payload }) => payload),
    [actionTypes.SET_GALLERY_MODAL_STATE]: producer((draft, { payload, meta }) => {
        draft['galleryModal'] = payload;
    }),
    [actionTypes.SET_ACCOUNT_MODAL_STATE]: producer((draft, { payload, meta }) => {
        draft['accountModal'] = payload;
    }),
    [actionTypes.SET_ACCOUNT_INFO]: producer((draft, { payload, meta }) => {
        draft['accountInfo'] = payload || null;
    })
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
