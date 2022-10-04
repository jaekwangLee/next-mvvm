import React from 'react';
import styled from 'styled-components';

export const DatePhotoNameMainSection = ({
    day,
    date,
    uri,
    man,
    woman,
    store
}: {
    day: string;
    date: string;
    uri: string;
    man: string;
    woman: string;
    store: string;
}) => {
    return (
        <MainSection>
            <DateWrapper>
                <DateText>{day}</DateText>
            </DateWrapper>
            <MainImage image={uri}></MainImage>
            <CoupleNameWrapper>
                <CoupleName>
                    <span>{man}</span>
                    <span className='gap'>{'/'}</span>
                    <span>{woman}</span>
                </CoupleName>
                <WeddingPlacTime>{date}</WeddingPlacTime>
                <WeddingPlacTime>{store}</WeddingPlacTime>
            </CoupleNameWrapper>
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

const DateWrapper = styled.div`
    width: 70vw;
    border-left: 1px solid #000000;
    margin-bottom: 26px;
`;

const DateText = styled.p`
    width: 30px;
    font-size: 16px;
    font-weight: 300;
    line-height: 20px;
    padding-left: 12px;
`;

const MainImage = styled.div`
    width: 70vw;
    height: 70vw;
    background-image: ${(props: { image: string }) => `url(${props.image})`};
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

const CoupleNameWrapper = styled.div`
    margin-top: 16px;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const CoupleName = styled.p`
    display: flex;
    align-items: center;
    text-align: right;
    margin-bottom: 16px;

    span {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 3.3px;
    }

    span.gap {
        font-size: 14px;
        font-weight: 100;
        transform: rotate(30deg);
        margin-left: 12px;
        margin-right: 12px;
    }
`;

const WeddingPlacTime = styled.p`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`;
