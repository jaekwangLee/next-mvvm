import { AccountInfo } from '@redux/app';
import React from 'react';
import styled from 'styled-components';
import { HeadDivider } from '../divider/HeadDivider';

export const GroomBirdeAccount = ({
    openGroomModal,
    openBrideModal
}: {
    openGroomModal: () => void;
    openBrideModal: () => void;
}) => {
    return (
        <AccountSection>
            <HeadDivider title='축하의 마음 전달하기' />
            <Comment>축하하는 마음을 담아 축의금을 전달해보세요</Comment>
            <AccountRow>
                <AccountLabel>신랑측</AccountLabel>
                <AccountButton bgColor='#77c0e9'>
                    <AccountText onClick={openGroomModal}>계좌번호 보기</AccountText>
                </AccountButton>
            </AccountRow>
            <AccountRow>
                <AccountLabel>신부측</AccountLabel>
                <AccountButton bgColor='#f79e9e'>
                    <AccountText onClick={openBrideModal}>계좌번호 보기</AccountText>
                </AccountButton>
            </AccountRow>
        </AccountSection>
    );
};

const AccountSection = styled.section`
    padding-top: 52px;
    padding-bottom: 52px;
`;

const Comment = styled.h5`
    font-size: 13px;
    font-weight: 300;
    color: #616161;
    line-height: 17px;
    text-align: center;

    margin-top: 26px;
    margin-bottom: 26px;
`;

const AccountRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`;

const AccountLabel = styled.label`
    font-size: 15px;
    font-weight: 400;
    margin-right: 20px;
`;

const AccountButton = styled.div`
    width: 50%;
    max-width: 240px;
    height: 40px;
    line-height: 40px;
    border-radius: 24px;
    overflow: hidden;
    background-color: ${(props: { bgColor: string }) => props.bgColor};
`;

const AccountText = styled.a`
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 14px;
    color: white;
    text-align: center;
    cursor: pointer;
`;
