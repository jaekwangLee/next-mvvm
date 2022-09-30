import { createAction } from 'typesafe-actions';

export const actionTypes = {
    SET_GALLERY_MODAL_STATE: 'app/SET_GALLERY_MODAL_STATE'
};

export const updateGalleryModal = createAction(actionTypes.SET_GALLERY_MODAL_STATE, state => state);
