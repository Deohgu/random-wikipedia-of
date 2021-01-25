import React, { useState } from 'react'

import { TitleInput } from './components'
import styles from './App.module.css'

import { recommendedFunc } from './utils/recommendedFunc'
import { newCat } from './utils/newCat'
import { anotherSubCat } from './utils/anotherSubCat'

// If an ERROR is received is it likely that it was done through form submit
// See this issue https://github.com/Deohgu/random-wikipedia-of/issues/13

const App = () => {
  const [inputData, setInputData] = useState('')
  const [prevInputData, setPrevInputData] = useState('')
  const [recommendedArr, setRecommendedArr] = useState([])
  const [fetchedData, setFetchedData] = useState({
    picked: 'Random',
    articles: [],
    subCats: []
  })

  // Call API fetching funcs and handles the received data
  // CURRENTLY HERE - anotherSubCat(dataToFetch) needs to receive the array
  // Line 30. Because it selects a new category from the list, so it needs the list
  // first if can be a string, but second must receive the initial data
  const submitData = async (dataToFetch) => {
    let fetchedDataTemp = ''
    if (dataToFetch !== '' && dataToFetch !== prevInputData) {
      // fetches a new category with articles and subcategories
      fetchedDataTemp = await newCat(dataToFetch)
      setPrevInputData(dataToFetch)
    } else if (dataToFetch !== '' && dataToFetch === prevInputData) {
      // fetchs more articles from a another subcategory
      fetchedDataTemp = await anotherSubCat(fetchedData) // parameter expects old data to add more {picked: "", articles: [], subCats: []}
    }
    setFetchedData(fetchedDataTemp)
  }

  // Data handler for new form inputs, buttons pressed, and form submit
  const fetchHandler = async (input, shouldSubmit) => {
    console.log(`fetchHandler: ${input}`)
    input !== inputData && setInputData(input) // Sets inputData when it receives a *new* input
    const dataTransf = await (input && recommendedFunc(input)) // Fetches recommendations if input was passed
    input ? setRecommendedArr(dataTransf) : setRecommendedArr([]) // Resets if no input === user deleted input text fully
    input && shouldSubmit && submitData(input)
  }

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        fetchedData={fetchedData}
        recommendedArr={recommendedArr}
        fetchHandler={fetchHandler}
      />
    </div>
  )
}

export default App
