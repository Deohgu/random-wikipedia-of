import React, { useState } from "react";

import { TitleInput } from "./components";
import styles from "./App.module.css";

import { newCat, newSubCat, recommendedFunc } from "./api";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [prevInputData, setPrevInputData] = useState("");
  const [recommendedArr, setRecommendedArr] = useState([]);
  const [randomPage, setRandomPage] = useState("Random");

  const submitData = async (dataToFetch) => {
    let fetchedData = "";
    if (dataToFetch !== "" && dataToFetch !== prevInputData) {
      fetchedData = await newCat(dataToFetch.replace(/[" "]/g, "_"));
      setPrevInputData(dataToFetch);
    } else if (dataToFetch !== "" && dataToFetch === prevInputData) {
      fetchedData = await newSubCat(dataToFetch.replace(/[" "]/g, "_"));
    }
    setRandomPage(fetchedData);
  };

  // Would always setInputData, but only setRecommendedArr sometimes right?
  // Can it handle a submitData as well?
  const handleFetch = async (input, shouldSubmit) => {
    console.log(`handleFetch input: ${input}`);
    input !== inputData && setInputData(input);
    const dataTransf = await (input && recommendedFunc(input)); // Fetches recommendations if input was passed
    input ? setRecommendedArr(dataTransf) : setRecommendedArr([]); // Resets if no input === user deleted input text fully
    shouldSubmit && submitData(input);
  };

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        submitData={() => submitData(inputData)} // Form submits
        randomPageTitle={randomPage}
        recommendedArr={recommendedArr}
        handleFetch={handleFetch}
      />
    </div>
  );
};

export default App;
