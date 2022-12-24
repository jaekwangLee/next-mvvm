import React from 'react';
import {
    RevieRowWrapper,
    ReviewRowContent,
    ReviewDeleteSection,
    ReviewDeleteButton,
    ReviewerName,
    ReviewTitleRow,
    ReviewerDate,
    ReviewerMessage,
    ReviewDeleteButtonImg
} from './row.styled';

export const BasicReviewRow = ({
    rvId,
    name,
    message,
    date,
    onDelete
}: {
    rvId: string;
    name: string;
    message: string;
    date: string;
    onDelete: (rvId: string) => void;
}) => {
    return (
        <RevieRowWrapper>
            <ReviewRowContent>
                <ReviewTitleRow>
                    <ReviewerName>{name}</ReviewerName>
                    <ReviewerDate>{date}</ReviewerDate>
                </ReviewTitleRow>
                <ReviewerMessage>{message}</ReviewerMessage>
            </ReviewRowContent>
            <ReviewDeleteSection>
                <ReviewDeleteButton
                    onClick={() => {
                        onDelete(rvId);
                    }}
                >
                    <ReviewDeleteButtonImg src='/images/icon/close.png' />
                </ReviewDeleteButton>
            </ReviewDeleteSection>
        </RevieRowWrapper>
    );
};
