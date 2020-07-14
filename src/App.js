import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat, recommendedFunc } from './api';

const App = () => {

  const [ inputData, setInputData ] = useState("")
  const [ prevInputData, setPrevInputData ] = useState("")
  const [ recommendedArr, setRecommendedArr ] = useState([])
   
  // useEffect is returning an array of recommended searches based on input and in return we are rendering that array with .map to create several recommendations in the form of buttons.
  useEffect(() => {
    const fetchedData = async () => {
    const dataTransf = await recommendedFunc(inputData);
    setRecommendedArr(dataTransf)
   };
   fetchedData();
  }, [inputData]);

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
      
      
      {/* CURRENTLY HERE! */}
      {/* To improve I can remove the B-Class and Uppercase the word after. Check the recommendations with B inputData */}
      
      {/* The recommendations should also not only add to inputData but also search it straight away.
      I've implemented that but it is not fully working, the search is giving undefined, meaning probably because inputData at the time is undefined, I have to console.log it */}
      
      <div className={styles.recContainer}> 
        { /* ternary to not attempt to render the initial undefined value */
        (recommendedArr !== undefined)
          ? ( recommendedArr.map( (curr, index) => (
              <button
                key={index}
                className={styles.recommendations}
                type="button"
                onClick={
                  async () => {
                    await setInputData(curr
                      .replace(/Category:/g, ""));
                    console.log(`${inputData}   ${curr}`);
                    submitData(inputData);
                  }
                }
              >
                {curr
                  .replace(/Category:/g, "")
                }
              </button>
            )) )
          : null
        }
      </div>
    </div>
  );
}


// App done whilst following a youtube video regarding a different app done with React
// Left off at ####
// https://www.youtube.com/watch?v=khJlrj3Y6Ls
// Compare with this one to understand
// https://www.youtube.com/watch?v=U9T6YkEDkMo

export default App;