import React from 'react'
import styles from './index.module.scss'

const Titles: React.FC = () => {
  return (
    <div className={styles.row}>
      <h3 className={`${styles.title} ${styles.playerTitle}`}>Player</h3>
      <h3 className={`${styles.title} ${styles.computerTitle}`}>Computer</h3>
    </div>
  )
}

export default Titles
