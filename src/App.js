import React, { useState } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat } from './api';


const App = () => {

  // input data has to be converted to a slug before being fetched
  const [ inputData, setInputData ] = useState("")

  const fetchCat = async () => {
    // if statement to choose which function to run based on the inputData and previous inputData

    await newCat(inputData);
    // newSubCat();
  }

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={ inputData }
        handleChange={ (e) => setInputData(e.target.value) } 
        inputDataSubmit={ fetchCat }
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