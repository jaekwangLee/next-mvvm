import type { AppContext, AppProps } from 'next/app';
import Modal from 'react-modal';
import { createStore, applyMiddleware, compose } from 'redux';
import router from 'next/router';
import rootReducer, { rootSaga } from 'redux/store';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import '../styles/globals.css';

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
    return <Component {...pageProps} />;
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
