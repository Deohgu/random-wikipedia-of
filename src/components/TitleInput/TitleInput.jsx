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
        placeholder="Category"
        // Trying to understand why this is not being read. All in all I need to learn about forms in React anyway, that should sort the issue.
        // value={this.props.inputData}
        // onChange={this.props.handleChange} 
      />
    </div>
  )
}

export default TitleInput;