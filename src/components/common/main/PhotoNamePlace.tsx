import React from 'react';
import styled from 'styled-components';

export const PhotoNamePlaceMainSection = ({
    title,
    uri,
    man,
    woman,
    date,
    place
}: {
    title: string;
    uri: string;
    man: string;
    woman: string;
    date: string;
    place: string;
}) => {
    return (
        <MainSection>
            <Title>{title}</Title>
            <MainImage src={uri} alt='청첩장_대표_이미지' />
            <NameLabel>
                {man}
                <CombineNameTag>★</CombineNameTag>
                {woman}
            </NameLabel>
            <PlaceAndTimeText>{date}</PlaceAndTimeText>
            <PlaceAndTimeText>{place}</PlaceAndTimeText>
        </MainSection>
    );
};

const MainSection = styled.section`
    width: 100%;
    min-height: 90vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h4`
    font-size: 13px;
    letter-spacing: 4px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 12px;
`;

const MainImage = styled.img`
    width: 70vw;
    height: 70vw;
    max-width: 403px;
    max-height: 403px;
    object-fit: contain;
    margin-bottom: 20px;
`;

const NameLabel = styled.h2`
    font-size: 16px;
    color: #333333;
    font-weight: 500;
    letter-spacing: 0.16px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const CombineNameTag = styled.span`
    font-size: 10px;
    color: #333333;
    transform: scale(0.7);
`;

const PlaceAndTimeText = styled.p`
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 2px;
    font-weight: 500;
`;
