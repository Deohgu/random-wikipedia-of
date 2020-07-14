import React from 'react';
import styles from './TitleInput.module.css';

const TitleInput = (props) => {
  return (
    <div className={styles.container}>
    
     {/* The word random could be substituted for the result and a new wikipedia page is provided and be a link that the person could press. */}
      <h1 className={styles.title}>
        RANDOM WIKIPEDIA PAGE OF THE
      </h1>
      
      {/* Have it focus on the input field when the page is loaded and everything being done with enter */}
      
      {/* See what else is required in the form if it is required at all */}
      <form 
        onSubmit={ (event) => {
          event.preventDefault();
          props.inputDataSubmit();
        } }
        // action="javascript:void(0);"
      >
        <input
          action=""
          type="text"
          placeholder=""
          value={props.inputData}
          onChange={props.handleChange} 
          autoFocus
        />

        {/* Have the button work with enter key press */}
        {/* The button must be the problem, it must be refreshing the page or something and losing the states! */}
        {/* <button
          type="button" 
          className={styles.searchButton}
          onClick={props.inputDataSubmit}
        >
          <i className={styles.icon} class="fa fa-search" aria-hidden="true"></i>
        </button> */}
      </form>
      <h1 className={styles.title}>
        CATEGORY.
      </h1>
    </div>
  )
}

export default TitleInput;