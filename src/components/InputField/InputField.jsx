import React from 'react';
import styles from './InputField.module.css';

const InputField = () => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="..."
      />
    </div>
  )
}

export default InputField;