import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-left: 24px;
    padding-right: 24px;

    margin-bottom: 12px;
`;

export const PaginationMover = styled.span`
    cursor: pointer;
    border: 1px solid #eeeeee;
    padding: 4px 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #999999;
    font-size: 11px;
`;

export const PaginationPageWrapper = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PageNumber = styled.span`
    color: #999999;
    font-size: 11px;
`;
