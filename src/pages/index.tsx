import { useLayoutEffect } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Router from 'next/router';

const Home: NextPage = () => {
    useLayoutEffect(() => {
        Router.push('/wedding/jkjy');
    }, []);

    return <div className={styles.container}></div>;
};

export default Home;
