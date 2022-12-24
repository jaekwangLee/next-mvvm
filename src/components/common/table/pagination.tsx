import React from 'react';
import { PaginationWrapper, PaginationMover, PaginationPageWrapper, PageNumber } from './pagination.styled';

export const TablePagination = ({
    currentPage,
    perPage,
    total,
    onPrev,
    onNext
}: {
    currentPage: number;
    perPage: number;
    total: number;
    onPrev: () => void;
    onNext: () => void;
}) => {
    const totalPage = Math.floor(total / perPage);
    return (
        <PaginationWrapper>
            <PaginationMover onClick={onPrev}>{'<'}</PaginationMover>
            <PaginationPageWrapper>
                <PageNumber>
                    <b>{currentPage + 1}</b>
                    {` / ${totalPage + 1}`}
                </PageNumber>
            </PaginationPageWrapper>
            <PaginationMover onClick={onNext}>{'>'}</PaginationMover>
        </PaginationWrapper>
    );
};
