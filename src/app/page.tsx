'use client'

import Image from "next/image";
import styles from "./page.module.scss";
import Spline from '@splinetool/react-spline';
import IllustrationLabel from "@/components/IllustrationLabel";
import Links from "@/components/Links";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.mainContainer}>

        <div className={styles.headline}>
          <h1 className={styles.title}>Hi!, I&apos;m <span>Carlos Henrique</span></h1>

          <div className={styles.skills}>
            <div>Front-end Developer</div>
            <div className={styles.dot}></div>
            <div>UI Designer</div>
          </div>

          <Links />
        </div>

        <div className={styles.illustration}>
          <div className={styles.label__container}>
             <IllustrationLabel />
          </div>

          <Image
            src="/profile.png"
            width={400}
            height={600}
            alt="imagem"
            className={styles.illustration__img}
          />
        </div>

      </div>
    </main>
  );
}
