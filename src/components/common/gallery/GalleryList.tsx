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
            <Title>GALLERY</Title>
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
        </GalleryContainer>
    );
};

const Title = styled.h4`
    font-size: 13px;
    letter-spacing: 4px;
    color: #333333;
    font-weight: 500;
    margin-bottom: 12px;
    text-align: center;
`;

const GalleryContainer = styled.section`
    background-color: #f1f1f1;
    padding-top: 42px;
    padding-bottom: 36px;
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
