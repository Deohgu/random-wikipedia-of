import React from 'react'
import styles from './TitleInput.module.css'

export const TitleInput = ({
  inputData,
  fetchedData,
  fetchHandler,
  inputFocus
}) => {
  // Content before and after category is picked
  const toDisplayConditionally = () => {
    if (fetchedData.picked === 'Random') {
      return (
        <h1 className={styles.title}>
          YOU WILL BE PROVIDED A RANDOM ARTICLE.
        </h1>
      )
    } else {
      return (
        <h1 className={styles.title}>
          YOU HAVE THE linked{' '}
          <a
            href={'https://en.wikipedia.org/wiki/' + fetchedData.picked.replace(/[" "]/g, '_')}
            className={styles.randomPageTitle}
          >
            {fetchedData.picked}
          </a>
          {' '}ARTICLE.
        </h1>
      )
    }
  }

  return (
    <div className={styles.container}>
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
            fetchHandler(e.target.value, false) // fetchHandler(..., false) runs but does not call submitData
          }} // fetches recommendations when a new character is inserted
          autoFocus
          ref={inputFocus}
        />
      </form>
      {toDisplayConditionally()}
    </div>
  )
}
