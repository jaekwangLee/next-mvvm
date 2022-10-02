import React, { useEffect } from 'react';
import { PageContainer, PageMobileOnlyWrapper } from '@components/common/container';
import JkJyController from '@components/jkjy/jkjy.controller';
import { NextPageContext } from 'next';
import { getWeddingPages } from 'api/wedding';

function WeddingJkjyPage(props: { id: string }) {
    return (
        <PageContainer>
            <PageMobileOnlyWrapper>
                <JkJyController {...props} />
            </PageMobileOnlyWrapper>
        </PageContainer>
    );
}

export async function getStaticPaths() {
    const { data } = await getWeddingPages();
    if (!data || data.status !== 'success') {
        return {
            paths: [],
            fallback: false
        };
    }

    const paths = data.data.map(({ id }: { id: string }) => ({ params: { id } }));
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(ctx: NextPageContext) {
    const { params }: any = ctx;
    return {
        props: {
            id: params.id
        }
    };
}

export default WeddingJkjyPage;
