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
                title='모바일 청첩장: 기쁜 마음으로 신랑,신부를 축하해주세요!'
                description='세상 단 하나뿐인 유니크한 모바일 청첩장, 셀프 메이드. 신랑, 신부들을 기쁜 마음으로 축하해주세요!'
                openGraph={{
                    type: 'website',
                    url: 'https://self-made.cloud',
                    title: '모바일 청첩장: 기쁜 마음으로 신랑,신부를 축하해주세요!',
                    description:
                        '세상 단 하나뿐인 유니크한 모바일 청첩장, 셀프 메이드. 신랑, 신부들을 기쁜 마음으로 축하해주세요!'
                    // images: [
                    //     {
                    //         url: '',
                    //         width: 800,
                    //         height: 400
                    //     }
                    // ]
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
