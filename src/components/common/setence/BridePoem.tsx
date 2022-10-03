import React from 'react';
import styled from 'styled-components';

export const BridePoem = ({ poem, title }: { poem: string[]; title: string }) => {
    return (
        <PoemContainer>
            <PoemWrapper>
                <PoemHeader>
                    <PoemTitle>{title}</PoemTitle>
                </PoemHeader>
                {poem.map((value, index) => (
                    <Poem key={`poem-${index}`}>{value}</Poem>
                ))}
            </PoemWrapper>
        </PoemContainer>
    );
};

const PoemContainer = styled.section`
    width: 100%;
    padding-top: 52px;
    padding-bottom: 52px;
`;

const PoemWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const Poem = styled.p`
    font-size: 13px;
    color: #010101;
    line-height: 25px;
    font-weight: 300;
    text-align: center;
`;

const PoemHeader = styled.div`
    padding-top: 16px;
    padding-bottom: 40px;
    border-top: 1px solid #000000;
`;

const PoemTitle = styled.p`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 4px;
    text-align: center;
`;
