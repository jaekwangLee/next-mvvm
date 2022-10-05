import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { ModalHeader } from '../gallery/SlickModal';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { useDispatch } from 'react-redux';
import { setAccountInfo, updateAccountModal } from '@redux/app';

const modalStyle = {
    content: {
        padding: 0,
        border: 0,
        inset: 0,
        backgroundColor: 'black',
        borderRadius: 0
    }
};

export const AccountModal = () => {
    const dispatch = useDispatch();
    const app = useSelector((state: RootState) => state.app);

    const closeModal = () => {
        dispatch(setAccountInfo(null));
        dispatch(updateAccountModal(false));
    };

    return (
        <Modal isOpen={app.accountModal} style={modalStyle}>
            <ModalHeader title='계좌번호 안내' onClose={closeModal} />
        </Modal>
    );
};
