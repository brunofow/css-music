import { useEffect, useState } from 'react';
import Head from 'next/head'
import {AiFillPlayCircle} from 'react-icons/ai'
import styles from '../styles/pages/Home.module.css'

import musicImage from '../assets/images/musicDraw.svg';

import useSound from 'use-sound';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>css-music</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        <span>css</span>
        <AiFillPlayCircle />
        <span>music</span>
      </h1>

      <section>
        <img src={musicImage} />
      </section >
    </div>
  )
}
