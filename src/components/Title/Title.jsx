import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Random Wikipedia of
      </h1>
    </div>
  )
}

export default Title;