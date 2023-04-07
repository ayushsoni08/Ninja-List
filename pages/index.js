import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, modi numquam ipsa provident nulla voluptatibus ratione fugit ut architecto, molestias quaerat quae quo reiciendis tenetur! Perferendis vero minus labore facere!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur rem incidunt, assumenda tempore dolore ipsa vel eaque. Aut placeat, mollitia vero vel ea voluptate officiis fuga reiciendis, asperiores minima suscipit!
        </p>

        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>

      </div >
    </>
  )
}
