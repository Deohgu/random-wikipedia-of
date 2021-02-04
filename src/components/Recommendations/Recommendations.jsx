import React from 'react'
import styles from './Recommendations.module.css'

export const Recommendations = ({
  recommendedArr,
  fetchHandler,
  focusHandler
}) => {
  return (
    <div>
      {recommendedArr.length > 0 &&
          recommendedArr.map((curr, index) => (
            <button
              key={`recommended${index}`}
              className={styles.recommendations}
              onClick={async () => {
                fetchHandler(curr, true)
                focusHandler()
              }}
            >
              {curr}
            </button>
          ))}
    </div>
  )
}
