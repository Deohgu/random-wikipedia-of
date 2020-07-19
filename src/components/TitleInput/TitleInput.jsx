import React from "react";
import styles from "./TitleInput.module.css";

const TitleInput = (props) => {
  return (
    <div className={styles.container}>
      {/* Link needs to be more obvious. */}
      <h1 className={styles.title}>
        {props.randomPageTitle === "Random" ? (
          props.randomPageTitle + " "
        ) : (
          <a
            href={"https://en.wikipedia.org/wiki/" + props.randomPageTitle}
            className={styles.randomPageTitle}
            target="_blank"
          >
            {props.randomPageTitle + " "}
          </a>
        )}
        WIKIPEDIA PAGE OF THE
      </h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.inputDataSubmit();
        }}
      >
        <input
          action=""
          type="text"
          placeholder=""
          value={props.inputData}
          onChange={props.handleChange}
          autoFocus
          ref={props.searchInput}
        />
      </form>
      <h1 className={styles.title}>CATEGORY.</h1>

      {/* https://reactgo.com/react-focus-input/
      Need to set the focus after pressing the recommendations button, according to this I can invoke a function on the button click for it */}

      {/* To improve I can remove the B-Class and Uppercase the word after. Check the recommendations with B inputData */}

      {/* https://stackoverflow.com/questions/54069253/usestate-set-method-not-reflecting-change-immediately
      According to this it means that states are only updated after each render, in this case because the function is within another function meaning a closure the state is still undefined. The fix is to always use useEffect for these fetches, only not when we need to get another random result. But maybe even then it would work with if statments on the useEffect, I just cannot be updating states there for some reason. */}

      <div className={styles.recContainer}>
        {
          /* ternary to not attempt to render the initial undefined value */
          props.recommendedArr !== undefined
            ? props.recommendedArr.map((curr, index) => (
                <button
                  key={index}
                  className={styles.recommendations}
                  type="button"
                  onClick={async () => {
                    props.setInputData(curr.replace(/Category:/g, ""));
                    props.setRecomPressed(true);
                    props.handleFocus();
                  }}
                >
                  {curr.replace(/Category:/g, "")}
                </button>
              ))
            : null
        }
      </div>
    </div>
  );
};

export default TitleInput;
