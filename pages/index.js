import About from "../components/About/About";
import FAQ from "../components/FAQ/FAQ";
import Products from "../components/Products/Products";
import ToggleTop from "../components/ToggleTop/ToggleTop";
import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
      <div className={styles.landing}>
        <h1>Member Panel</h1>
        <h4 className={`${styles.animatedH4}`}>
          <span>Experience </span>
          <span>Your </span>
          <span>Dream </span>
          <span>With </span>
          <span>Us</span>
        </h4>
      </div>
      <button onClick={()=> handleClick()}>dashboard</button>
      <Products />
      <About />
      <FAQ />
      <ToggleTop/>
    </main>
    </>
  )
}
