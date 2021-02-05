import React, { useState, useRef } from 'react'
import { AppContainer, GlobalStyle } from './App.styled'

// components
import { TitleInput } from './components/TitleInput/TitleInput'
import { Recommendations } from './components/Recommendations/Recommendations'

// util functions
import { recommendedFunc } from './utils/recommendedFunc'
import { newCat } from './utils/newCat'
import { anotherSubCat } from './utils/anotherSubCat'

// If an ERROR is received after submiting is it likely that it was done through form submit instead of pressing recommendations
// See this issue https://github.com/Deohgu/random-wikipedia-of/issues/13

export const App = () => {
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
    if (dataToFetch !== '' && dataToFetch !== prevInputData) {
      // fetches a new category with articles and subcategories
      const newData = await newCat(dataToFetch)
      setPrevInputData(dataToFetch)
      setFetchedData(newData)
    } else if (dataToFetch !== '' && dataToFetch === prevInputData) {
      // fetchs more articles from a another subcategory
      const newData = await anotherSubCat(fetchedData) // parameter expects old data to add more {picked: "", articles: [], subCats: []}
      setFetchedData(newData)
    }
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

  // onClick in recommendations will focus on input
  const inputFocus = useRef(null)
  const focusHandler = () => {
    inputFocus.current.focus()
  }

  return (
    <AppContainer>
      <GlobalStyle />
      <TitleInput
        inputData={inputData}
        fetchedData={fetchedData}
        recommendedArr={recommendedArr}
        fetchHandler={fetchHandler}
        inputFocus={inputFocus}
      />
      <Recommendations
        recommendedArr={recommendedArr}
        fetchHandler={fetchHandler}
        focusHandler={focusHandler}
      />
    </AppContainer>
  )
}
