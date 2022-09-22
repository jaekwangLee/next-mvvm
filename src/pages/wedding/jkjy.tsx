import { PageContainer, PageMobileOnlyWrapper } from '@components/common/container';
import JkJyController from '@components/jkjy/jkjy.controller';
import React from 'react';

function WeddingJkjyPage() {
    return (
        <PageContainer>
            <PageMobileOnlyWrapper>
                <JkJyController />
            </PageMobileOnlyWrapper>
        </PageContainer>
    );
}

export default WeddingJkjyPage;
