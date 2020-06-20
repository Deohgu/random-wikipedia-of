import React from 'react';
import styles from './TitleInput.module.css';

const TitleInput = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Random Wikipedia of
      </h1>
      <input
        type="text"
        placeholder="..."
      />
    </div>
  )
}

export default TitleInput;