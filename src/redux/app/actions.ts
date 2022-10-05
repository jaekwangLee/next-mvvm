import { createAction } from 'typesafe-actions';

export const actionTypes = {
    SET_GALLERY_MODAL_STATE: 'app/SET_GALLERY_MODAL_STATE',
    SET_ACCOUNT_MODAL_STATE: 'app/SET_ACCOUNT_MODAL_STATE',
    SET_ACCOUNT_INFO: 'app/SET_ACCOUNT_INFO'
};

export const updateGalleryModal = createAction(actionTypes.SET_GALLERY_MODAL_STATE, state => state)();
export const updateAccountModal = createAction(actionTypes.SET_ACCOUNT_MODAL_STATE, state => state)();
export const setAccountInfo = createAction(actionTypes.SET_ACCOUNT_INFO, info => info)();
