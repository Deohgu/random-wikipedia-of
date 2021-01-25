import React, { useRef } from 'react'
import styles from './TitleInput.module.css'

const TitleInput = ({
  inputData,
  fetchedData,
  recommendedArr,
  fetchHandler
}) => {
  const inputFocus = useRef(null)

  // Enables me to use multiple elements in the ternary operator.
  // To be improved.
  const componentToRenderTwo = (
    <>
      YOU HAVE THE linked{' '}
      <a
        href={'https://en.wikipedia.org/wiki/' + fetchedData.picked}
        className={styles.randomPageTitle}
      >
        {fetchedData.picked + ' '}
      </a>
    </>
  )

  return (
    <div className={styles.container}>
      {/* Link needs to be more obvious. */}

      <h1 className={styles.title}>WITHIN THE WIKIPEDIA CATEGORY OF</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          fetchHandler(inputData, true)
        }}
      >
        <input
          action=''
          type='text'
          placeholder=''
          value={inputData}
          onChange={(e) => {
            fetchHandler(e.target.value, false) // false === fetchHandler does not call submitData
          }} // Calls recommendedFunc to fetch recommendations when a new character is inserted
          autoFocus
          ref={inputFocus}
        />
      </form>
      <h1 className={styles.title}>
        {fetchedData === 'Random'
          ? `YOU WILL BE PROVIDED A ${fetchedData} `
          : componentToRenderTwo}
        ARTICLE.
      </h1>

      <div className={styles.recContainer}>
        {recommendedArr.length > 0 &&
          recommendedArr.map((curr, index) => (
            <button
              key={`recommended${index}`}
              className={styles.recommendations}
              type='button'
              onClick={async () => {
                fetchHandler(curr, true)
                inputFocus.current.focus()
              }}
            >
              {curr}
            </button>
          ))}
      </div>
    </div>
  )
}

export default TitleInput
