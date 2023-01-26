import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import { ComponentDivider } from '../divider/ComponentDivider';

export const WeddingShopTransportGuide = ({
    subway,
    bus,
    park,
    rentBus,
    notice,
    weddingDate,
    man,
    woman
}: {
    subway?: string;
    bus?: string;
    park: string;
    rentBus?: string;
    notice?: string;
    weddingDate: Date;
    man: string;
    woman: string;
}) => {
    return (
        <GuideContainer>
            <GuideWrapper>
                {!!subway && (
                    <>
                        <GuideTitle>지하철 안내</GuideTitle>
                        <GuideText>
                            {subway.split('\n').map((_word, _idx) => (
                                <span key={`subway_${_idx}`}>
                                    {_word}
                                    <br />
                                </span>
                            ))}
                        </GuideText>
                        <ComponentDivider topMargin={12} bottomMargin={12} />
                    </>
                )}
                {!!bus && (
                    <>
                        <GuideTitle>버스 안내</GuideTitle>
                        <GuideText>
                            {bus.split('\n').map((_word, _idx) => (
                                <span key={`bus_${_idx}`}>
                                    {_word}
                                    <br />
                                </span>
                            ))}
                        </GuideText>
                        <ComponentDivider topMargin={12} bottomMargin={12} />
                    </>
                )}
                <GuideTitle>주차 안내</GuideTitle>
                <GuideText>{park}</GuideText>
                {!!rentBus && (
                    <>
                        <ComponentDivider topMargin={12} bottomMargin={12} />
                        <GuideTitle>전세 버스 안내</GuideTitle>
                        <GuideText>
                            {rentBus.split('\n').map((_word, _idx) => (
                                <span key={`rentBus_${_idx}`}>
                                    {_word}
                                    <br />
                                </span>
                            ))}
                        </GuideText>
                        {/* <ComponentDivider topMargin={12} bottomMargin={12} /> */}
                    </>
                )}
            </GuideWrapper>
            {(notice || rentBus) && (
                <GuideWrapper style={{ marginTop: '12px' }}>
                    {/* {!!rentBus && (
                        <>
                            <GuideTitle>전세 버스 안내</GuideTitle>
                            <GuideText>
                                {rentBus.split('\n').map((_word, _idx) => (
                                    <span key={`rentBus_${_idx}`}>
                                        {_word}
                                        <br />
                                    </span>
                                ))}
                            </GuideText>
                            <ComponentDivider topMargin={12} bottomMargin={12} />
                        </>
                    )} */}
                    {!!weddingDate && (
                        <>
                            <GuideTitle>{`${man} ❤️ ${woman}`} 결혼식</GuideTitle>
                            <GuideText>
                                D-
                                {dayjs(weddingDate).hour(0).minute(0).diff(dayjs().hour(0).minute(0).toDate(), 'days') +
                                    1}
                            </GuideText>
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
