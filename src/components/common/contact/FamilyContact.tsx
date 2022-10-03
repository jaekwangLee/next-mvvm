import React from 'react';
import styled from 'styled-components';

export const FamilyContact = ({
    groomFather,
    groomFatherContact,
    groomMother,
    groomMotherContact,
    brideFather,
    birdeFatherContact,
    brideMother,
    brideMotherContact
}: {
    groomFather?: string;
    groomMother?: string;
    brideFather?: string;
    brideMother?: string;
    groomFatherContact?: string;
    groomMotherContact?: string;
    birdeFatherContact?: string;
    brideMotherContact?: string;
}) => {
    return (
        <FamilyContactContainer>
            <ContactRowContainer>
                <GroupTicker>신랑측 혼주</GroupTicker>
                {!!groomFather && !!groomFatherContact && (
                    <>
                        <FamilyLabelRow>
                            <FamilyLabelText>
                                <FamilyLabel>아버지</FamilyLabel>
                            </FamilyLabelText>
                            {groomFather}
                        </FamilyLabelRow>
                        <ContactSolution side='groom' contact={groomFatherContact} />
                    </>
                )}
                {!!groomMother && !!groomMotherContact && (
                    <>
                        <FamilyLabelRow>
                            <FamilyLabelText>
                                <FamilyLabel>어머니</FamilyLabel>
                            </FamilyLabelText>
                            {groomMother}
                        </FamilyLabelRow>
                        <ContactSolution side='groom' contact={groomMotherContact} />
                    </>
                )}
            </ContactRowContainer>

            <ContactGapContainer>
                <ContactGap>▲</ContactGap>
            </ContactGapContainer>

            <ContactRowContainer>
                <GroupTicker>신부측 혼주</GroupTicker>
                {!!brideFather && !!birdeFatherContact && (
                    <>
                        <FamilyLabelRow>
                            <FamilyLabelText>
                                <FamilyLabel>아버지</FamilyLabel>
                            </FamilyLabelText>
                            {brideFather}
                        </FamilyLabelRow>
                        <ContactSolution side='bride' contact={birdeFatherContact} />
                    </>
                )}
                {!!brideMother && !!brideMotherContact && (
                    <>
                        <FamilyLabelRow>
                            <FamilyLabelText>
                                <FamilyLabel>어머니</FamilyLabel>
                            </FamilyLabelText>
                            {brideMother}
                        </FamilyLabelRow>
                        <ContactSolution side='bride' contact={brideMotherContact} />
                    </>
                )}
            </ContactRowContainer>
        </FamilyContactContainer>
    );
};

const ContactSolution = ({ side, contact }: { side: 'bride' | 'groom'; contact: string }) => {
    return (
        <FamilyLabelRow>
            <a href={`tel:${contact}`} style={{ marginRight: '16px' }}>
                <ContactTool
                    src={side === 'bride' ? '/images/icon/bridePhone.png' : '/images/icon/groomPhone.png'}
                    alt='전화하기'
                />
            </a>
            <a href={`sms:${contact}`}>
                <ContactTool src={'/images/icon/sms.png'} alt='문자하기' />
            </a>
        </FamilyLabelRow>
    );
};

const FamilyContactContainer = styled.section`
    width: 100%;
    display: flex;
    align-items: flex-start;
    padding-bottom: 42px;
`;

const ContactRowContainer = styled.div`
    flex: 1;
`;

const FamilyLabelRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

const FamilyLabelText = styled.p`
    font-size: 14px;
    font-weight: 400;
`;

const FamilyLabel = styled.span`
    font-size: 11px;
    font-weight: 400;
    margin-right: 6px;
`;

const ContactGapContainer = styled.div`
    width: 40px;
    color: #d3d3d3;
    display: flex;
    justify-content: center;
`;

const ContactGap = styled.span`
    font-size: 12px;
`;

const ContactTool = styled.img`
    width: 36px;
    height: 36px;
`;

const GroupTicker = styled.p`
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 20px;
`;
