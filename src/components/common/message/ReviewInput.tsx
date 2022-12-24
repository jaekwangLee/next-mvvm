import React from 'react';
import styled from 'styled-components';

import { ReviewInputTypes } from '@components/template/template.controller';
import { HeadDivider } from '../divider/HeadDivider';
import { Review } from '@redux/review/types';

export const ReviewInput = ({
    review,
    register,
    onChangeInput
}: {
    review?: Review;
    register: () => void;
    onChangeInput: ({ type, value }: { type: ReviewInputTypes; value: string }) => void;
}) => {
    return (
        <ReviewInputSection>
            <HeadDivider title='메시지' />
            <Comment>축하 메시지를 남겨주세요</Comment>
            <InputForm>
                <PersonalInfoRow>
                    <PersonalInput
                        type='name'
                        value={review ? review.name : ''}
                        autoCapitalize='false'
                        autoComplete='false'
                        placeholder='이름'
                        maxLength={20}
                        onChange={e => {
                            onChangeInput({ type: 'name', value: e.target.value });
                        }}
                    />
                    <PersonalInput
                        type='password'
                        value={review ? review.password : ''}
                        autoCapitalize='false'
                        autoComplete='false'
                        placeholder='비밀번호'
                        maxLength={8}
                        onChange={e => {
                            onChangeInput({ type: 'password', value: e.target.value });
                        }}
                    />
                </PersonalInfoRow>
                <MessageTextarea
                    value={review ? review.message : ''}
                    autoCapitalize='false'
                    autoComplete='false'
                    placeholder='축하 메시지'
                    maxLength={500}
                    onChange={e => {
                        onChangeInput({ type: 'message', value: e.target.value });
                    }}
                />
                <ReviewButton onClick={register}>등록하기</ReviewButton>
            </InputForm>
        </ReviewInputSection>
    );
};

const ReviewInputSection = styled.section`
    background-color: #f6f6f6;
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

const InputForm = styled.div`
    padding-left: 24px;
    padding-right: 24px;
`;

const PersonalInfoRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
`;

const PersonalInput = styled.input`
    width: 49.5%;
    height: 40px;
    border: 0px;
    text-indent: 8px;
    outline: none;
    background-color: #ffffff;
    font-size: 14px;
    font-weight: 400;
`;

const MessageTextarea = styled.textarea`
    width: 100%;
    height: 80px;
    min-height: 80px;
    max-height: 80px;
    border: 0px;
    outline: none;
    resize: none;
    padding: 8px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
`;

const ReviewButton = styled.a`
    width: 100%;
    display: inline-block;
    height: 42px;
    line-height: 42px;
    background-color: #333333;
    color: #ffffff;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
`;
