import React from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: auto;

    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 576px;
    margin: 0 auto;
    box-shadow: 4px 8px 16px #cccccc;

    @media (max-width: 576px) {
        box-shadow: none;
    }
`;

export const PageMultipleWrapper = styled.div`
    width: 100%;
    height: auto;
`;

export const PageMobileOnlyWrapper = styled.div`
    width: 100%;
    max-width: 768px;
    height: auto;
    position: relative;
`;
