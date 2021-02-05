import styled from 'styled-components'

export const RecommContainer = styled.button`
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 209, 162);

  border: none;
  padding: 8px 12px;
  width: 100%;

  font-size: 20px;

  &:first-child {
  margin-top: 20px;
}

  &:not(:last-child) {
  border: 8px solid rgb(255, 219, 172);
  border-left: 0;
  border-right: 0;
  border-top: 0;
}

`
