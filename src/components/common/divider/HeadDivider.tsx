import React from 'react';
import styled from 'styled-components';

export const HeadDivider = ({ title }: { title: string }) => {
    return (
        <Header>
            <Title>{title}</Title>
        </Header>
    );
};

const Title = styled.h4`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 4px;
    text-align: center;
    color: #333333;
    margin-bottom: 12px;
    border-top: 1px solid #000000;

    width: 70%;
    padding-top: 16px;
`;

const Header = styled.div`
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
`;
