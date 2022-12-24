import { ReviewDocument } from '@redux/review';
import dayjs from 'dayjs';
import React from 'react';
import { ListContainer, ListRowsWrapper } from './list.styled';
import { BasicReviewRow } from './row';

export const ReviewTableList = ({
    list,
    currPage,
    perPage,
    onDelete
}: {
    list: ReviewDocument[];
    currPage: number;
    perPage: number;
    onDelete: (rvId: string) => void;
}): React.ReactElement => {
    return (
        <ListContainer>
            <ListRowsWrapper>
                {!!list &&
                    list.length > 0 &&
                    list
                        .slice(currPage * perPage, currPage * perPage + perPage)
                        .map((rowItem, idx) => (
                            <BasicReviewRow
                                key={rowItem.rvId}
                                name={rowItem.name}
                                message={rowItem.message}
                                rvId={rowItem.rvId}
                                date={dayjs(rowItem.createdAt).format('YYYY.M.D H:m')}
                                onDelete={onDelete}
                            />
                        ))}
            </ListRowsWrapper>
        </ListContainer>
    );
};
