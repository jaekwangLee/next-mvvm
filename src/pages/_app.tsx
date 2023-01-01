import React from 'react';
import type { AppContext, AppProps } from 'next/app';
import router from 'next/router';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from 'redux/store';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import Modal from 'react-modal';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

Modal.setAppElement('#__next');

const sagaMiddleware = createSagaMiddleware({
    context: {
        history: router
    }
});

function bindReduxMiddleware() {
    const dev = process.env.NEXT_PUBLIC_DEV === 'true';
    const middleware = dev
        ? compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
    return middleware;
}

function configureStore() {
    const middleware = bindReduxMiddleware();
    const store = createStore(rootReducer, middleware);
    sagaMiddleware.run(rootSaga);
    return store;
}

const wrapper = createWrapper(configureStore, { debug: process.env.NEXT_PUBLIC_DEV === 'true' });

function WrappedApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                title='모바일 청첩장: 신랑 이재광, 신부 서지예의 결혼식에 당신을 초대합니다'
                description='신랑 이재광, 신부 서지예의 결혼식에 참석하여 축복해주세요. 신랑, 신부님이 당신의 축복을 진심으로 기다리고있습니다.'
                openGraph={{
                    type: 'website',
                    url: 'https://self-made.cloud',
                    title: '모바일 청첩장: 신랑 이재광, 신부 서지예의 결혼식에 당신을 초대합니다',
                    description:
                        '신랑 이재광, 신부 서지예의 결혼식에 참석하여 축복해주세요. 신랑, 신부님이 당신의 축복을 진심으로 기다리고있습니다.'
                    images: [
                        {
                            url: 'https://wedding-cloud.s3.ap-northeast-2.amazonaws.com/jkjy_wedding_3.jpg',
                            width: 800,
                            height: 400
                        }
                    ]
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

WrappedApp.getInitialProps = async ({ ctx, Component }: AppContext) => {
    return {
        pageProps: {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
        },
        appProps: ctx.pathname
    };
};

export default wrapper.withRedux(WrappedApp);
