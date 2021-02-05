import React from 'react'
import { RecommContainer } from './Recommendations.styled'

export const Recommendations = ({
  recommendedArr,
  fetchHandler,
  focusHandler
}) => {
  return (
    <div>
      {recommendedArr.length > 0 &&
          recommendedArr.map((curr, index) => (
            <RecommContainer
              onClick={async () => {
                fetchHandler(curr, true)
                focusHandler()
              }}
              key={`recommended${index}`}
            >
              {curr}
            </RecommContainer>
          ))}
    </div>
  )
}
