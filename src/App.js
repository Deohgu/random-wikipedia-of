import React, { useState, useEffect } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat, recommendedFunc } from './api';

const App = () => {

  const [ inputData, setInputData ] = useState("");
  const [ prevInputData, setPrevInputData ] = useState("");
  const [ recommendedArr, setRecommendedArr ] = useState([]);
  const [ recomPressed, setRecomPressed ] = useState(false);

  // useEffect is returning an array of recommended searches based on input and in return we are rendering that array with .map to create several recommendations in the form of buttons.
  useEffect(() => {
    const fetchedData = async () => {
    const dataTransf = await recommendedFunc(inputData);
    setRecommendedArr(dataTransf)
  };
    fetchedData();
  }, [inputData]);
  
  useEffect( () => {
    console.log(`inputData = ${inputData}, recomPressed = ${recomPressed}`);
    if (recomPressed === true) {
      submitData(inputData);
    }
    setRecomPressed(false);

  }, [recomPressed === true]);

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
      
      {/* https://reactgo.com/react-focus-input/
      Need to set the focus after pressing the recommendations button, according to this I can invoke a function on the button click for it */}
      
      {/* To improve I can remove the B-Class and Uppercase the word after. Check the recommendations with B inputData */}
      
      
      {/* https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
      According to this it means that states are only updated after each render, in this case because the function is within another function meaning a closure the state is still undefined. The fix is to always use useEffect for these fetches, only not when we need to get another random result. But maybe even then it would work with if statments on the useEffect, I just cannot be updating states there for some reason. */}
      
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
                    await setInputData( curr.replace(/Category:/g, ""));
                    setRecomPressed(true);
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