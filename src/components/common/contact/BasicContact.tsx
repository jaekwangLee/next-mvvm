import React from 'react';
import styled from 'styled-components';

export const BasicContact = ({ groom, bride }: { groom: string; bride: string }) => {
    return (
        <BasicContactContainer>
            <GBContainer>
                <GBRow style={{ marginBottom: '16px' }}>
                    <GBLabel>신랑에게 연락하기</GBLabel>
                    <Linked href={`tel:${groom}`}>
                        <GBIcon src={'/images/icon/groomPhone.png'} alt='신랑에게 전화하기' />
                    </Linked>
                    <Linked href={`sms:${groom}`}>
                        <GBIcon src={'/images/icon/sms.png'} alt='신랑에게 문자하기' />
                    </Linked>
                </GBRow>
                <GBRow>
                    <GBLabel>신부에게 연락하기</GBLabel>
                    <Linked href={`tel:${bride}`}>
                        <GBIcon src={'/images/icon/bridePhone.png'} alt='신부에게 전화하기' />
                    </Linked>
                    <Linked href={`sms:${bride}`}>
                        <GBIcon src={'/images/icon/sms.png'} alt='신부에게 문자하기' />
                    </Linked>
                </GBRow>
            </GBContainer>
            <FBContainer></FBContainer>
        </BasicContactContainer>
    );
};

const BasicContactContainer = styled.section`
    width: 100%;
    padding-top: 62px;
    padding-bottom: 62px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const GBContainer = styled.div`
    padding-bottom: 42px;
`;

const GBRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GBLabel = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #333333;
`;

const Linked = styled.a`
    margin-left: 24px;
    cursor: pointer;
`;

const GBIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const FBContainer = styled.div``;
