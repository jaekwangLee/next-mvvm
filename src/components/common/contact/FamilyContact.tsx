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
        <BasicContactContainer>
            <ContactRowContainer>
                {!!groomFather && (
                    <FamilyLabelRow>
                        <FamilyLabelText>
                            <FamilyLabel>아버지</FamilyLabel>
                        </FamilyLabelText>
                        {groomFather}
                    </FamilyLabelRow>
                )}
                {!!groomMother && (
                    <FamilyLabelRow>
                        <FamilyLabelText>
                            <FamilyLabel>어머니</FamilyLabel>
                        </FamilyLabelText>
                        {groomMother}
                    </FamilyLabelRow>
                )}
            </ContactRowContainer>
            <ContactGapContainer>
                <ContactGap>▲</ContactGap>
            </ContactGapContainer>
            <ContactRowContainer>
                {!!brideFather && (
                    <FamilyLabelRow>
                        <FamilyLabelText>
                            <FamilyLabel>아버지</FamilyLabel>
                        </FamilyLabelText>
                        {brideFather}
                    </FamilyLabelRow>
                )}
                {!!brideMother && (
                    <FamilyLabelRow>
                        <FamilyLabelText>
                            <FamilyLabel>어머니</FamilyLabel>
                        </FamilyLabelText>
                        {brideMother}
                    </FamilyLabelRow>
                )}
            </ContactRowContainer>
        </BasicContactContainer>
    );
};

const BasicContactContainer = styled.section`
    width: 100%;
    background-color: #f8f8f8;

    display: flex;
    align-items: flex-start;
`;

const ContactRowContainer = styled.div`
    flex: 1;
`;

const FamilyLabelRow = styled.div`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const FamilyLabelText = styled.p`
    font-size: 13px;
    font-weight: 400;
`;

const FamilyLabel = styled.span`
    font-size: 11px;
    font-weight: 400;
`;

const ContactGapContainer = styled.div`
    width: 60px;
    align-items: center;
    color: #d3d3d3;
`;

const ContactGap = styled.span`
    font-size: 12px;
`;
