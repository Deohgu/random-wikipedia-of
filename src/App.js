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
    // setPickedArticle(fetchedDataTemp.picked) // extracts the picked choice
  }

  // Data handler for new form inputs, buttons pressed, and form submit
  const fetchHandler = async (input, shouldSubmit) => {
    input !== inputData && setInputData(input) // Sets inputData when it receives a *new* input
    if (input) {
      if (input !== inputData) {
        const dataTransf = await recommendedFunc(input) // Fetches recommendations if a new input was passed
        setRecommendedArr(dataTransf) // displays new recommendations
      }
      shouldSubmit && submitData(input) // when shouldSubmit true it fetches the data for that input
    } else {
      setRecommendedArr([]) // clears recommendations if input does not exist = user deleted
    }
  }

  return (
    <div className={styles.container}>
      <TitleInput
        inputData={inputData}
        fetchedData={fetchedData}
        // pickedArticle={pickedArticle}
        recommendedArr={recommendedArr}
        fetchHandler={fetchHandler}
      />
    </div>
  )
}

export default App
