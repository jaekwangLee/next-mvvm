import styled from 'styled-components';

export const RevieRowWrapper = styled.div`
    width: 100%;

    padding: 12px 16px;
    background-color: #ffffff;
    border: 1px solid #eeeeee;

    margin-bottom: 8px;
    position: relative;
`;

export const ReviewRowContent = styled.div`
    flex: 1;
`;

export const ReviewDeleteSection = styled.div`
    position: absolute;
    top: -8px;
    right: -4px;
`;

export const ReviewDeleteButton = styled.div`
    display: inline-block;
    padding: 6px;
    cursor: pointer;
`;

export const ReviewDeleteButtonImg = styled.img`
    width: 12px;
    height: 12px;
`;

export const ReviewTitleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5px;
`;

export const ReviewerName = styled.span`
    font-size: 11px;
    color: #333333;
`;

export const ReviewerDate = styled.span`
    font-size: 10px;
    color: #999999;
`;

export const ReviewerMessage = styled.div`
    font-size: 11px;
    color: #1c1c1c;
`;
