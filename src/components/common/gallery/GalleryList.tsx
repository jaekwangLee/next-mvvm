import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const WeddingGalleryList = ({ countPerRow, images }: { countPerRow: 2 | 3; images: any[] }) => {
    const [innerWidth, setInnerWidth] = useState(0);
    useEffect(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    const imageWidth = countPerRow === 3 ? (innerWidth - 12) / countPerRow : (innerWidth - 6) / countPerRow;
    const imageHeight = countPerRow === 3 ? (innerWidth - 12) / countPerRow : (innerWidth - 6) / countPerRow;

    return (
        <GalleryContainer>
            <Title>GALLERY</Title>
            <GalleryListContainer>
                {images &&
                    images.map((image, index) => (
                        <GalleryItem
                            key={'gallery-image-' + index}
                            style={{
                                width: imageWidth,
                                height: imageHeight
                            }}
                        >
                            <GalleryItemImage src={''} alt='웨딩갤러리이미지' />
                        </GalleryItem>
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
    justify-content: space-between;
`;

const GalleryItemImage = styled.img`
    width: 100%;
    height: 100%;
    // object-fit: contain;
`;

const GalleryItem = styled.div`
    margin-bottom: 6px;
`;
