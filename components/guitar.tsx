import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import { AiFillPlayCircle } from "react-icons/ai";
import styles from '../styles/components/Guitar.module.css';

import eString from '../assets/audio/guitar/e-string.mp3';
import aString from '../assets/audio/guitar/a-string.mp3';
import dString from '../assets/audio/guitar/d-string.mp3';
import gString from '../assets/audio/guitar/g-string.mp3';
import bString from '../assets/audio/guitar/b-string.mp3';
import emString from '../assets/audio/guitar/em-string.mp3';
import Link from 'next/link';

export default function Guitar() {
  const [ isHoverToPlayOn, setIsHoverToPlayOn ] = useState(false);
  const [ buttonClass, setButtonClass ] = useState(styles.click);

  useEffect(() => {
    isHoverToPlayOn ? setButtonClass(styles.hover) : setButtonClass(styles.click);
  }, [isHoverToPlayOn])
  
  const [ePlay] = useSound(eString, {
    volume: 0.2
  });

  const [aPlay] = useSound(aString, {
    volume: 0.2
  })

  const [dPlay] = useSound(dString, {
    volume: 0.2
  })

  const [gPlay] = useSound(gString, {
    volume: 0.2
  })

  const [bPlay] = useSound(bString, {
    volume: 0.2
  })

  const [emPlay] = useSound(emString, {
    volume: 0.2
  })

  return (
    <div className={styles.guitarContainer}>
      <Link href="/">
        <AiFillPlayCircle size={50} color="#FFF" />
      </Link>
      <h1>{isHoverToPlayOn ? 'Hover' : 'Click'} on the strings to play!</h1>
      <button onClick={() => setIsHoverToPlayOn(!isHoverToPlayOn)} className={`${styles.selector} ${buttonClass}`} >
        { isHoverToPlayOn ? 'Hover mode' : 'Click mode'}
      </button>
      <div className={styles.guitar}>
        <div className={styles.hole}></div>
        <div className={styles.bridge}></div>
        <div className={styles.neck}>
          <div className={styles.headstock}>
            <div className={styles.headHole}>
              <div className={styles.tuningPegs}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.headHole}>
              <div className={styles.tuningPegs}>
              <span></span>
              <span></span>
              <span></span>
              </div>
            </div>
            <div className={styles.turners}>
              <div>
              <span></span>
              <span></span>
              <span></span>
              </div>
              <div>
              <span></span>
              <span></span>
              <span></span>
              </div>
            </div>
          </div>
          <div className={styles.nut}></div>
          <div className={styles.topStrings}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={styles.strings} >
          <span onClick={() => ePlay()} onMouseEnter={() => isHoverToPlayOn && ePlay()} ></span>
          <span onClick={() => aPlay()} onMouseEnter={() => isHoverToPlayOn && aPlay()} ></span>
          <span onClick={() => dPlay()} onMouseEnter={() => isHoverToPlayOn && dPlay()} ></span>
          <span onClick={() => gPlay()} onMouseEnter={() => isHoverToPlayOn && gPlay()} ></span>
          <span onClick={() => bPlay()} onMouseEnter={() => isHoverToPlayOn && bPlay()} ></span>
          <span onClick={() => emPlay()} onMouseEnter={() => isHoverToPlayOn && emPlay()} ></span>
        </div>
      </div>
    </div>
  )
}

