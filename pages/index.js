import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <title>Ninjas listing | Home</title>
            <meta name="keywords" content="Ninjas" />
        </Head>
        <div>
          <h1 className={styles.title}>Home page</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet impedit blanditiis fugiat, aspernatur odit dolore commodi ullam laborum consequuntur assumenda nobis ipsum fuga facilis? Minus cupiditate eos dolores sint?</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet impedit blanditiis fugiat, aspernatur odit dolore commodi ullam laborum consequuntur assumenda nobis ipsum fuga facilis? Minus cupiditate eos dolores sint?</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eveniet impedit blanditiis fugiat, aspernatur odit dolore commodi ullam laborum consequuntur assumenda nobis ipsum fuga facilis? Minus cupiditate eos dolores sint?</p>
          <Link href="/ninjas" className={styles.btn}>See ninjas list</Link>
      </div>
    </>

  )
}
