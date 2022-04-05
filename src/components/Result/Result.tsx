import useCountdown from 'hooks/useCountdown'
import React from 'react'
import { selectPlayerChoice, selectResults } from 'store/selectors'
import { useGetChoiceQuery } from 'store/slices/apiSlice'
import urlMapper from 'utils/urlMapper'
import styles from './index.module.scss'
import ResultsMessage from './ResultsMessage'
import Titles from './Titles'

const Result: React.FC = () => {
  const playerChoice = selectPlayerChoice()
  const results = selectResults()

  const { data } = useGetChoiceQuery(playerChoice, {
    skip: playerChoice === undefined,
  })

  const count = useCountdown(playerChoice)

  return (
    <div className={styles.container}>
      {playerChoice !== undefined && !results && <Titles />}
      {playerChoice !== undefined && !results && (
        <div className={styles.row}>
          <div className={`glass ${styles.spinner} ${styles.player}`}>
            <img src={urlMapper[playerChoice]} />
          </div>
          {data && (
            <div className={`glass ${styles.spinner} ${styles.computer}`}>
              <img src={urlMapper[data.name]} />
            </div>
          )}
        </div>
      )}
      {count > 0 && <h1>{count}</h1>}
      <ResultsMessage results={results} />
    </div>
  )
}

export default Result
