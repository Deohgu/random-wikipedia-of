import React, { useState } from "react";

import { TitleInput } from "./components";
import styles from "./App.module.css";

import { newCat, newSubCat, recommendedFunc } from "./api";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [prevInputData, setPrevInputData] = useState("");
  const [recommendedArr, setRecommendedArr] = useState([]);
  const [randomPage, setRandomPage] = useState("Random");

  // useEffect is returning an array of recommended searches based on input and in return we are rendering that array with .map to create several recommendations in the form of buttons.
  // useEffect(() => {
  //   if (inputData !== "") {
  //     const fetchedData = async () => {
  //       const dataTransf = await recommendedFunc(inputData);
  //       setRecommendedArr(dataTransf);
  //     };
  //     fetchedData();
  //   }
  // }, [inputData]);

  // console.log(recommendedArr);

  // CURENTLY HERE. Trying to figure how to call this by pressing the recommendations.
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
        inputDataSubmit={() => submitData(inputData)}
        randomPageTitle={randomPage}
        recommendedArr={recommendedArr}
        setInputData={setInputData}
        handleFetch={handleFetch}
      />
    </div>
  );
};

export default App;
