import React, { useEffect } from 'react';
import { PageContainer, PageMobileOnlyWrapper } from '@components/common/container';
import Template from '@components/template/template.controller';
import { NextPageContext } from 'next';
import { NextSeo } from 'next-seo';
import { getWeddingPages } from 'api/wedding';
import { useWedding } from '@components/template/template.viewModel';

function WeddingJkjyPage(props: { id: string }) {
    const { info, reviewInfo } = useWedding(props.id);
    const title = `모바일 청첩장 도착: 신랑 이재광, 신부 서지예의 결혼식에 당신을 초대합니다`;
    // info
    // ? `모바일 청첩장 도착: 신랑 ${info?.groom.name}, 신부 ${info?.bride.name}의 결혼식에 당신을 초대합니다`
    // : '';
    const desc = `신랑 이재광, 신부 서지예의 결혼식에 참석하여 축복해주세요. 신랑, 신부님이 당신의 축복을 진심으로 기다리고있습니다.`;
    // info
    // ? `신랑 ${info?.groom.name}, 신부 ${info?.bride.name}의 결혼식에 참석하여 축복해주세요. 신랑, 신부님이 당신의 축복을 진심으로 기다리고있습니다.`
    // : '';

    return (
        <>
            <NextSeo
                title={title}
                description={desc}
                openGraph={{
                    type: 'website',
                    url: `https://self-made.cloud/wedding/jkjy`, //-`https://self-made.cloud/wedding/${props.id}`,
                    title: title,
                    description: desc,
                    images: [
                        {
                            url: 'https://wedding-cloud.s3.ap-northeast-2.amazonaws.com/IMG_0742.jpg', //- info?.mainPhoto || '',
                            width: 800,
                            height: 400
                        }
                    ]
                }}
            />
            <PageContainer>
                <PageMobileOnlyWrapper>
                    <Template info={info} review={reviewInfo} />
                </PageMobileOnlyWrapper>
                <div style={{ position: 'fixed', top: '0px', left: '0px', width: '100%', height: '1px' }}>
                    <div id='page-container' style={{ width: '100%', height: '100%' }}></div>
                </div>
            </PageContainer>
        </>
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
