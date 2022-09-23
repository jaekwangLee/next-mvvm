import React from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: auto;

    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PageMultipleWrapper = styled.div`
    width: 100%;
    height: auto;
`;

export const PageMobileOnlyWrapper = styled.div`
    width: 100%;
    max-width: 768px;
    height: auto;
`;
