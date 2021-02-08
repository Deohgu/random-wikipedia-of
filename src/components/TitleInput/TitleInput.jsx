import React from 'react'

import { TitleContainer, Title, RandomPage, TitleForm, TitleInputField } from './TitleInput.styled'

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
        <Title>
          YOU WILL BE PROVIDED A RANDOM ARTICLE.
        </Title>
      )
    } else {
      return (
        <Title>
          YOU HAVE THE linked{' '}
          <RandomPage
            href={'https://en.wikipedia.org/wiki/' + fetchedData.picked.replace(/[" "]/g, '_')}
          >
            {fetchedData.picked}
          </RandomPage>
          {' '}ARTICLE.
        </Title>
      )
    }
  }

  return (
    <TitleContainer>
      <Title>FROM THE CATEGORY</Title>
      <div style={{ display: 'Flex', flexDirection: 'row' }}>
        <Title>OF</Title>
        <Title>&nbsp;</Title> {/* Adds a space in the same line */}
        <TitleForm
          onSubmit={(e) => {
            e.preventDefault()
            fetchHandler(inputData, true)
          }}
        >
          <TitleInputField
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
        </TitleForm>
      </div>
      {toDisplayConditionally()}
    </TitleContainer>
  )
}
