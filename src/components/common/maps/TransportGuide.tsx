import React from 'react';
import styled from 'styled-components';
import { ComponentDivider } from '../divider/ComponentDivider';

export const WeddingShopTransportGuide = ({
    subway,
    bus,
    park,
    rentBus,
    notice
}: {
    subway?: string;
    bus?: string;
    park: string;
    rentBus?: string;
    notice?: string;
}) => {
    return (
        <GuideContainer>
            <GuideWrapper>
                {!!subway && (
                    <>
                        <GuideTitle>지하철 안내</GuideTitle>
                        <GuideText>{subway}</GuideText>
                        <ComponentDivider topMargin={12} bottomMargin={12} />
                    </>
                )}
                {!!bus && (
                    <>
                        <GuideTitle>버스 안내</GuideTitle>
                        <GuideText>{bus}</GuideText>
                        <ComponentDivider topMargin={12} bottomMargin={12} />
                    </>
                )}
                <GuideTitle>주차 안내</GuideTitle>
                <GuideText>{park}</GuideText>
            </GuideWrapper>
            {(notice || rentBus) && (
                <GuideWrapper style={{ marginTop: '12px' }}>
                    {!!rentBus && (
                        <>
                            <GuideTitle>전세 버스 안내</GuideTitle>
                            <GuideText>{rentBus}</GuideText>
                            <ComponentDivider topMargin={12} bottomMargin={12} />
                        </>
                    )}
                    {!!notice && (
                        <>
                            <GuideTitle>기타 안내사항</GuideTitle>
                            <GuideText>{notice}</GuideText>
                        </>
                    )}
                </GuideWrapper>
            )}
        </GuideContainer>
    );
};

const GuideContainer = styled.div`
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #f6f6f6;
`;

const GuideWrapper = styled.div`
    background-color: #ffffff;
    padding: 24px;
`;

const GuideTitle = styled.dt`
    font-size: 14px;
    font-weight: 400;
    color: #333333;
    line-height: 21px;
    margin-bottom: 4px;
`;

const GuideText = styled.dd`
    font-size: 13px;
    font-weight: 300;
    color: #333333;
`;
