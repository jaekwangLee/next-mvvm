import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useLayoutEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  
  useLayoutEffect(() => {
    router.push('/post')
  }, [router])

  return (
    <div className={styles.container}>
    </div>
  )
}

export default Home
