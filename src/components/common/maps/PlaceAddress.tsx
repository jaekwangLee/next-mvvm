import React from 'react';
import styled from 'styled-components';
import { HeadDivider } from '../divider/HeadDivider';

export const PlaceAddress = ({ store, address, contact }: { store: string; address: string; contact: string }) => {
    return (
        <PlaceSection>
            <HeadDivider title='오시는길' />
            <PlaceContainer>
                <PlaceInfoWrapper>
                    <PlaceInfoTitle>{store}</PlaceInfoTitle>
                    <PlaceInfoAddress>{address}</PlaceInfoAddress>
                    <PlaceInfoAddress>Tel. {contact}</PlaceInfoAddress>
                </PlaceInfoWrapper>
                <PlaceContactWrapper>
                    <a href={`tel:${contact}`}>
                        <PlaceCallIcon src='/images/icon/weddingPhone.png' alt='웨딩홀전화하기' />
                    </a>
                </PlaceContactWrapper>
            </PlaceContainer>
        </PlaceSection>
    );
};

const PlaceSection = styled.section`
    width: 100%;
    margin-top: 52px;
`;

const PlaceContainer = styled.div`
    display: flex;
    align-items: flex-start;
    background-color: #fafafa;
    padding: 24px;
`;

const PlaceInfoWrapper = styled.div`
    flex: 1;
`;

const PlaceContactWrapper = styled.div`
    padding-left: 12px;
`;

const PlaceInfoTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 6px;
    color: #333333;
`;

const PlaceInfoAddress = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 2px;
    color: #767676;
`;

const PlaceCallIcon = styled.img`
    width: 32px;
    height: 32px;
`;
