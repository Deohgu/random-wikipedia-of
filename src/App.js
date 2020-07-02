import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat } from './api';


const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ lockInputData, setLockInputData ] = useState("")
  
  console.log(`inputData = ${inputData}     lockInputData = ${lockInputData}     lockInputData = ${lockInputData.replace(/[" "]/g, "_")}`);

  useEffect(
    () => {
      const fetchData = async () => {
        await newCat(lockInputData.replace(/[" "]/g, "_"));
      };
      if (lockInputData !== "") {
        fetchData();
      }
    },
    [lockInputData]
  );


  return (
    <div className={styles.container}>
      <TitleInput
        inputData={ inputData }
        handleChange={ (e) => setInputData(e.target.value) } 
        inputDataSubmit={ () => setLockInputData(inputData) }
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