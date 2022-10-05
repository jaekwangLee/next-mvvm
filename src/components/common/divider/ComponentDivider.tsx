import React from 'react';
import styled from 'styled-components';

export const ComponentDivider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
    margin-top: ${(props: { topMargin?: number; bottomMargin?: number }) =>
        props.topMargin ? `${props.topMargin}px` : '0px'};
    margin-bottom: ${(props: { topMargin?: number; bottomMargin?: number }) =>
        props.bottomMargin ? `${props.bottomMargin}px` : '0px'};
`;
