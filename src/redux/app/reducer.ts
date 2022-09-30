import producer from 'immer';
import { createReducer } from 'typesafe-actions';
import { HYDRATE } from 'next-redux-wrapper';
import { actionTypes } from './actions';
import { AppInitialState } from './types';

const initialState: AppInitialState = {
    galleryModal: false
};

const appReducer = createReducer(initialState, {
    [HYDRATE]: producer((draft, { payload }) => payload),
    [actionTypes.SET_GALLERY_MODAL_STATE]: producer((draft, { payload, meta }) => {
        draft['galleryModal'] = payload;
    })
});

export default appReducer;

export type RootState = ReturnType<typeof appReducer>;
