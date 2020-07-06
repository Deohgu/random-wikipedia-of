import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat } from './api';

const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ prevInputData, setPrevInputData ] = useState("")
   

  const submitData = async (dataToFetch) => {
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      await newCat(dataToFetch.replace(/[" "]/g, "_"));
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
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