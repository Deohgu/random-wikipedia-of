import React from 'react';
import styles from './TitleInput.module.css';

const TitleInput = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Random Wikipedia of
      </h1>
      {/* See what else is required in the form if it is required at all */}
      <form>
        <input
          type="text"
          placeholder="Category"
          value={props.inputData}
          onChange={props.handleChange} 
          />
        <input
          type="submit" 
          value="random"
          // onClick=""
        />
      </form>
    </div>
  )
}

export default TitleInput;