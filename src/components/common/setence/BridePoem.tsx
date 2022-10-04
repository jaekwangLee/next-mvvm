import React from 'react';
import styled from 'styled-components';
import { HeadDivider } from '../divider/HeadDivider';

export const BridePoem = ({ poem, title }: { poem: string[]; title: string }) => {
    return (
        <PoemContainer>
            <HeadDivider title={title} />
            {poem.map((value, index) => (
                <Poem key={`poem-${index}`}>{value}</Poem>
            ))}
        </PoemContainer>
    );
};

const PoemContainer = styled.section`
    width: 100%;
    padding-top: 52px;
    padding-bottom: 52px;
`;

const Poem = styled.p`
    font-size: 13px;
    color: #010101;
    line-height: 25px;
    font-weight: 300;
    text-align: center;
`;
