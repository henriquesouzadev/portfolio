import React from 'react'
import styles from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';

library.add(faYoutube, faGithub, faLinkedin, faInstagram)

const Links = () => {
  return (
    <div className={styles.links}>
      <a href="https://github.com/henriquesouzadev" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>

      <a href="https://www.youtube.com/@henriquesouzadev" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'youtube']} />
      </a>

      <a href="https://www.linkedin.com/in/chsouza/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>

      <a href="https://www.instagram.com/henriquesouza.dev" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
    </div>
  )
}

export default Links