import React, { useState } from "react";

import { TitleInput } from "./components";
import styles from "./App.module.css";

import { newCat, newSubCat, recommendedFunc } from "./api";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [prevInputData, setPrevInputData] = useState("");
  const [recommendedArr, setRecommendedArr] = useState([]);
  const [randomPage, setRandomPage] = useState("Random");

  // Call API fetching funcs and handles the received data
  // CURRENTLY HERE - This might need refactoring
  const submitData = async (dataToFetch) => {
    let fetchedData = "";
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      fetchedData = await newCat(dataToFetch);
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      fetchedData = await newSubCat(dataToFetch);
    }
    setRandomPage(fetchedData);
  };

  // Data handler for new form inputs, buttons pressed, and form submit
  const fetchHandler = async (input, shouldSubmit) => {
    input !== inputData && setInputData(input); // Sets inputData when it receives a *new* input
    const dataTransf = await (input && recommendedFunc(input)); // Fetches recommendations if input was passed
    input ? setRecommendedArr(dataTransf) : setRecommendedArr([]); // Resets if no input === user deleted input text fully
    input && shouldSubmit && submitData(input);
  };

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        randomPage={randomPage}
        recommendedArr={recommendedArr}
        fetchHandler={fetchHandler}
      />
    </div>
  );
};

export default App;
