import React from 'react';
import styles from './TitleInput.module.css';

const TitleInput = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Random Wikipedia of
      </h1>
      {/* See what else is required in the form if it is required at all */}
      <form 
        onSubmit={ () => false}
      >
        <input
          action=""
          type="text"
          placeholder="Category"
          value={props.inputData}
          onChange={props.handleChange} 
        />
        {/* Have the button work with enter key press */}
        {/* The button must be the problem, it must be refreshing the page or something and losing the states! */}
        <button
          type="button" 
          onClick={props.inputDataSubmit}
        >
          Random
        </button>
      </form>
    </div>
  )
}

export default TitleInput;