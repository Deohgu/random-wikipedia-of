import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat } from './api';


const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ lockInputData, setLockInputData ] = useState("")
  const [prevLockInputData, setPrevLockInputData] = useState("")
  
  console.log(`inputData = ${inputData}, lockInputData = ${lockInputData}, prevLockInputData = ${prevLockInputData}`);

  // Currently requiring two presses to search, I wonder if the setLockInputData is stopping the thing from running by refreshing it somehow.
  const submitData = async (dataToFetch) => {
    setLockInputData(dataToFetch); // same as inputData

    if (lockInputData !== "" && lockInputData !== prevLockInputData) {
      await newCat(dataToFetch.replace(/[" "]/g, "_"))
      setPrevLockInputData(lockInputData);
    } else if (lockInputData !== "" && lockInputData === prevLockInputData) {
      await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
  }

  // Was faced with the problem of wanting to use the same state but having it give another result. This only allowed part of the code, meaning when a new category is placed. So I created the above function that works with both and runs straight out of the button press.
  // useEffect(
  //   () => {
  //     const fetchData = async (fetchType) => {
  //       await fetchType(lockInputData.replace(/[" "]/g, "_"));
  //     };

  //     if (lockInputData !== "" && lockInputData !== prevLockInputData) {
  //       fetchData(newCat);
  //       setPrevLockInputData(lockInputData);
  //     } else if (lockInputData !== "") {
  //       fetchData(newSubCat);
  //     }
  //   },
  //   [lockInputData]
  // );


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