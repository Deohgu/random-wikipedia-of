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
        />
      </form>
      <h1 className={styles.title}>CATEGORY.</h1>
    </div>
  );
};

export default TitleInput;
