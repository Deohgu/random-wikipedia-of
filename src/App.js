import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat, recomendedFunc } from './api';

const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ prevInputData, setPrevInputData ] = useState("")
   
  // Api request for the recommendations built, can now use (recomendedFunc(inputData)) to receive information
  // Check paper notes, the idea will be to use useEffect on inputData to always provide sugestions.
  // useEffect will return an array
  // In app return there will be a array.map that returns <a className="suggest"> { curr } </a>
  // And that should be placed on the DOM.
  // In CSS it will be edited so that it shows neatly underneath like the codePen example.

  const submitData = async (dataToFetch) => {
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      await newCat(dataToFetch.replace(/[" "]/g, "_"));
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
  }

  const suggestionBox = {
    
  }

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={ inputData }
        handleChange={ (e) => setInputData(e.target.value) } 
        inputDataSubmit={ () => submitData(inputData) }
      />
    </div>
  );
}


// App done whilst following a youtube video regarding a different app done with React
// Left off at ####
// https://www.youtube.com/watch?v=khJlrj3Y6Ls
// Compare with this one to understand
// https://www.youtube.com/watch?v=U9T6YkEDkMo

export default App;