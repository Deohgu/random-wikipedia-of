import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat } from './api';


const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ lockInputData, setLockInputData ] = useState("")
  
  console.log(`inputData = ${inputData}     lockInputData = ${lockInputData}     lockInputData = ${lockInputData.replace(/[" "]/g, "_")}`);

  // PROBLEM - I am trying to use useEffect to call the fetch function once the category (lockInputData) has been set by pressing the button 
  // Before the useEffect the data exists according to the console.log above it, but the console.log inside of it registers nothing. I believe that it is re rendering as soon as lockInputData is changed thus resets it back to "" and sends that.
  // Read about useEffect
  useEffect(
    () => {
      return async () => {
        console.log( lockInputData.replace(/[" "]/g, "_") );
        await newCat(lockInputData.replace(/[" "]/g, "_"));
      };
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