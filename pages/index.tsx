import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { AiFillPlayCircle } from "react-icons/ai";
import styles from "../styles/pages/Home.module.css";

import musicImage from "../assets/images/musicDraw.svg";
import guitarThumb from '../assets/images/thumbs/guitarThumb.png';

import useSound from "use-sound";

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

      <section className={styles.details}>
        <img src={musicImage} />

        <h1>A simple website, to join css and music, that’s all.</h1>
      </section>

      <div className={styles.instruments}>
        <Link href="/instrument?name=guitar">
          <div className={styles.card}>
            <img src={guitarThumb} alt="guitar" />
          </div>
        </Link>
      </div>
    </div>
  );
}
