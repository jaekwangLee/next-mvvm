import React from 'react';
import styled from 'styled-components';

export const BasicTextBanner = ({ image, text }: { image: string; text: string }) => {
    return (
        <BasicBannerSection image={`/images/banner/${image}`}>
            <BasicBannerImage>
                <BasicBannerText>{text}</BasicBannerText>
            </BasicBannerImage>
        </BasicBannerSection>
    );
};

const BasicBannerSection = styled.section`
    width: 100%;
    height: 16vh;
    background-image: ${(props: { image: string }) => `url(${props.image})`};
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: 100% auto;
    overflow: hidden;
`;

const BasicBannerImage = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
`;

const BasicBannerText = styled.p`
    font-size: 12px;
    font-weight: 200;
    text-align: center;
    color: #ffffff;
    letter-spacing: 8px;
`;
