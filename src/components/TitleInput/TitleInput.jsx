import React, { useRef } from "react";
import styles from "./TitleInput.module.css";

const TitleInput = ({
  inputData,
  handleInputData,
  submitData,
  randomPageTitle,
  recommendedArr,
  setInputData,
  handleFetch,
}) => {
  const searchInput = useRef(null);

  // Enables me to use multiple elements in the ternary operator.
  const componentToRenderTwo = (
    <>
      YOU HAVE THE linked{" "}
      <a
        href={"https://en.wikipedia.org/wiki/" + randomPageTitle}
        className={styles.randomPageTitle}
      >
        {randomPageTitle + " "}
      </a>
    </>
  );

  return (
    <div className={styles.container}>
      {/* Link needs to be more obvious. */}

      <h1 className={styles.title}>WITHIN THE WIKIPEDIA CATEGORY OF</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitData(inputData);
          handleFetch();
        }}
      >
        <input
          action=""
          type="text"
          placeholder=""
          value={inputData}
          onChange={(e) => {
            handleInputData(e.target.value);
            handleFetch(e.target.value);
          }} // Fetches the API when a new character is inserted
          autoFocus
          ref={searchInput}
        />
      </form>
      <h1 className={styles.title}>
        {randomPageTitle === "Random"
          ? `YOU WILL BE PROVIDED A ${randomPageTitle} `
          : componentToRenderTwo}
        ARTICLE.
      </h1>

      {/* https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
      According to this it means that states are only updated after each render, in this case because the function is within another function meaning a closure the state is still undefined. The fix is to always use useEffect for these fetches, only not when we need to get another random result. But maybe even then it would work with if statments on the useEffect, I just cannot be updating states there for some reason. */}

      <div className={styles.recContainer}>
        {recommendedArr.length > 0 &&
          recommendedArr.map((curr, index) => (
            <button
              key={`recommended${index}`}
              className={styles.recommendations}
              type="button"
              onClick={async () => {
                setInputData(curr.title);
                console.log(`curr.title: ${curr.title}`)
                submitData(curr.title);
                handleFetch();
                searchInput.current.focus();
              }}
            >
              {curr.title}
            </button>
          ))}
      </div>
    </div>
  );
};

export default TitleInput;
