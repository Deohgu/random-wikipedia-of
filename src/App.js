import React, { useEffect, useState } from 'react';

import { TitleInput } from './components';
import styles from './App.module.css';

import { newCat, newSubCat, category } from './api';


const App = () => {

  const [ inputData, setInputData ] = useState("test")

  useEffect (() => {
    (async () => {
      // category = "duck";

      await newCat();
      newSubCat();
    })();
  }, []);

  console.log( inputData );

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={ inputData }
        handleChange={ (e) => setInputData(e.target.value) } 
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