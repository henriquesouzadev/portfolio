import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

const IllustrationLabel = () => {
  return (
    <div className={styles.label}>
        <div className={styles.label__logo}>
          <Image src="/label-logo.svg" width={32} height={40} alt="imagem" />
        </div>

        <Image
          src="/label.svg"
          width={150}
          height={150}
          alt="imagem"
          className={styles.label__bg}
        />
    </div>
  )
}

export default IllustrationLabel