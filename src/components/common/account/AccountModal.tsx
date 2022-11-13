import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from '@redux/store';
import { setAccountInfo, updateAccountModal } from '@redux/app';

const modalStyle = {
    overlay: {
        backgroundColor: 'none'
    },
    content: {
        padding: 0,
        border: 0,
        inset: 0,
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
};

export const AccountModal = () => {
    const dispatch = useDispatch();
    const app = useSelector((state: RootState) => state.app);
    const _parentAccount = useRef<HTMLInputElement>(null);
    const _account = useRef<HTMLInputElement>(null);

    const closeModal = () => {
        dispatch(setAccountInfo(null));
        dispatch(updateAccountModal(false));
    };

    const copyAccount = (account: string) => {
        const noDashAccount = account.replace(/-/gi, '');
        window.navigator.clipboard.writeText(noDashAccount);

        setTimeout(() => {
            window.alert('계좌번호를 복사하였습니다.');
        }, 300);
    };

    return (
        <Modal isOpen={app.accountModal} style={modalStyle}>
            <CenterModalContainer>
                <HeaderWrapper>
                    <HeaderTitle>계좌번호 안내</HeaderTitle>
                </HeaderWrapper>
                {!!app.accountInfo?.parentName && (
                    <div style={{ marginBottom: '24px' }}>
                        <AccountRow>
                            <AccountNameTag>예금주: {app.accountInfo?.parentName}</AccountNameTag>
                            <AccountNameTag>{app.accountInfo.parentBank}</AccountNameTag>
                        </AccountRow>
                        <CopyContainer>
                            <input ref={_parentAccount} type='hidden' value={app.accountInfo.parentAccount} />
                            <AccountText>{app.accountInfo.parentAccount}</AccountText>
                            <AccountCopyButton
                                onClick={() => {
                                    copyAccount(app.accountInfo?.parentAccount || '');
                                }}
                            >
                                복사
                            </AccountCopyButton>
                        </CopyContainer>
                    </div>
                )}

                {!!app.accountInfo?.name && (
                    <>
                        <AccountRow>
                            <AccountNameTag>예금주: {app.accountInfo?.name}</AccountNameTag>
                            <AccountNameTag>{app.accountInfo.bank}</AccountNameTag>
                        </AccountRow>
                        <CopyContainer>
                            <input ref={_account} type='hidden' value={app.accountInfo.account} />
                            <AccountText>{app.accountInfo.account}</AccountText>
                            <AccountCopyButton
                                onClick={() => {
                                    copyAccount(app.accountInfo?.account || '');
                                }}
                            >
                                복사
                            </AccountCopyButton>
                        </CopyContainer>
                    </>
                )}
                <CloseWrapper onClick={closeModal}>
                    <CloseButton src='/images/darkClose.png' alt='모달닫기' />
                </CloseWrapper>
            </CenterModalContainer>
        </Modal>
    );
};

const CenterModalContainer = styled.div`
    width: 90%;
    max-width: 520px;
    background-color: #ffffff;
    padding: 24px;
    border-radius: 4px;
    position: relative;
`;

const HeaderWrapper = styled.div`
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #ececec;
`;

const HeaderTitle = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    text-align: center;
`;

const CloseWrapper = styled.a`
    position: absolute;
    right: 12px;
    top: 16px;
    padding: 8px;
`;

const CloseButton = styled.img`
    width: 16px;
    height: 16px;
`;

const AccountRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AccountNameTag = styled.span`
    font-size: 13px;
    font-weight: 300;
    color: #333333;
`;

const CopyContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    display: flex;
`;

const AccountText = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    flex: 1;
`;

const AccountCopyButton = styled.span`
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 12px;
    padding-right: 0px;
`;
