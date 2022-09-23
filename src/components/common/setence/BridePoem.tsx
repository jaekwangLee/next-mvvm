import React from 'react';
import styled from 'styled-components';

export const BridePoem = ({ poem }: { poem: string[] }) => {
    return (
        <PoemContainer>
            {poem.map((value, index) => (
                <Poem key={`poem-${index}`}>{value}</Poem>
            ))}
        </PoemContainer>
    );
};

const PoemContainer = styled.section`
    width: 100%;
    background-color: #f1f1f1;
    padding-top: 40px;
    padding-bottom: 40px;
`;

const Poem = styled.p`
    font-size: 10px;
    color: #333333;
    line-height: 18px;
    font-weight: 500;
    text-align: center;
`;
