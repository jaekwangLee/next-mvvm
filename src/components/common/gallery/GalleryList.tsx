import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const WeddingGalleryList = ({
    windowWidth,
    countPerRow,
    images,
    showImage
}: {
    windowWidth: number;
    countPerRow: 2 | 3;
    images: any[];
    showImage: (idx: number) => void;
}) => {
    const imageWidth = countPerRow === 3 ? (windowWidth - 24) / countPerRow : (windowWidth - 16) / countPerRow;
    const imageHeight = countPerRow === 3 ? (windowWidth - 24) / countPerRow : (windowWidth - 16) / countPerRow;

    return (
        <GalleryContainer>
            <Header>
                <Title>GALLERY</Title>
            </Header>
            <GalleryListContainer>
                {images &&
                    images.map((image, index) => (
                        <GalleryItem
                            key={'gallery-image-' + index}
                            onClick={() => {
                                showImage(index);
                            }}
                            style={{
                                width: imageWidth,
                                height: imageHeight,
                                backgroundImage: `url(${image})`
                            }}
                        ></GalleryItem>
                    ))}
            </GalleryListContainer>
            <GalleryGuide>이미지를 클릭하시면 확대보기가 가능합니다.</GalleryGuide>
        </GalleryContainer>
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

const GalleryContainer = styled.section`
    width: 100%;
    padding-top: 52px;
    padding-bottom: 52px;
`;

const GalleryListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const GalleryItem = styled.div`
    margin-bottom: 6px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
`;

const GalleryGuide = styled.p`
    font-size: 12px;
    color: #333333;
    font-weight: 400;
    text-align: center;
    margin-top: 18px;
`;
