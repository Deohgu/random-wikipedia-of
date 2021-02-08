import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Title = styled.h1`
  font-family: "Oswald";
  text-transform: uppercase;
  word-spacing: 1px;

  letter-spacing: 0.1px;

  &:last-child {
    margin: 0;
  }
`

export const RandomPage = styled.a`
  font-style: italic; 
`

export const TitleForm = styled.form`
  display: flex;
  align-content: center;
`

export const TitleInputField = styled.input`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  text-transform: uppercase;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;

  flex: 1;
  width: 100%;
  height: 40px;
  padding: 0;

  &:focus {
    outline: none;
  }
`
