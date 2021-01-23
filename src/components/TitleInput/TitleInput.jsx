import React, { useRef } from "react";
import styles from "./TitleInput.module.css";

const TitleInput = ({
  inputData,
  submitData,
  randomPageTitle,
  recommendedArr,
  handleFetch,
}) => {
  const searchInput = useRef(null);

  // Enables me to use multiple elements in the ternary operator.
  // To be improved.
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

      {/* CURRENTLY HERE. Trying to get data from the form to pass to handleFetch */}
      <form
        onSubmit={(e) => {
          console.dir(e);
          e.preventDefault();
          handleFetch(e.target.value, true);
        }}
      >
        <input
          action=""
          type="text"
          placeholder=""
          value={inputData}
          onChange={(e) => {
            console.log(`e in input onChange: ${e}`);
            handleFetch(e.target.value, false); // false === does not call submitData func
          }} // Calls recommendedFunc to fetch recommendations when a new character is inserted
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

      <div className={styles.recContainer}>
        {recommendedArr.length > 0 &&
          recommendedArr.map((curr, index) => (
            <button
              key={`recommended${index}`}
              className={styles.recommendations}
              type="button"
              onClick={async () => {
                handleFetch(curr.title, true);
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
