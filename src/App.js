import React, { useState } from "react";

import { TitleInput } from "./components";
import styles from "./App.module.css";

import { newCat, newSubCat, recommendedFunc } from "./api";

// Currently need to clean the mixture of using handleFetch and inputData.

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

  const handleFetch = async (input) => {
    const dataTransf = await (input && recommendedFunc(input)); // Fetches if input was passed
    input ? setRecommendedArr(dataTransf) : setRecommendedArr([]); // Resets if no input === user deleted input fully
  };

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        handleInputData={(input) => setInputData(input)}
        submitData={(receivedData) => submitData(receivedData)}
        randomPageTitle={randomPage}
        recommendedArr={recommendedArr}
        setInputData={setInputData}
        handleFetch={handleFetch}
      />
    </div>
  );
};

export default App;
