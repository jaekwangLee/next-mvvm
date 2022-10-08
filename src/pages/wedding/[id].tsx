import React, { useEffect } from 'react';
import { PageContainer, PageMobileOnlyWrapper } from '@components/common/container';
import Template from '@components/template/template.controller';
import { NextPageContext } from 'next';
import { getWeddingPages } from 'api/wedding';

function WeddingJkjyPage(props: { id: string }) {
    return (
        <PageContainer>
            <PageMobileOnlyWrapper>
                <Template {...props} />
            </PageMobileOnlyWrapper>
            <div style={{ position: 'fixed', top: '0px', left: '0px', width: '100%', height: '1px' }}>
                <div id='page-container' style={{ width: '100%', height: '100%' }}></div>
            </div>
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
