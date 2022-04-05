import React from 'react'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { clearResultsHistory } from 'store/actions'
import { selectResultsHistory } from 'store/selectors'
import styles from './index.module.scss'

const Scoreboard: React.FC = () => {
  const dispatch = useDispatch()
  const resultsHistory = selectResultsHistory()

  const handleClick = () => {
    dispatch(clearResultsHistory())
  }

  const hasHistory = resultsHistory && resultsHistory.length > 0

  return (
    <div className={`glass ${styles.box}`}>
      <div className={styles.title}>
        <h3 data-testid='title'>Scoreboard</h3>
        <RiDeleteBack2Fill onClick={handleClick} data-testid='icon' />
      </div>
      <hr data-testid='divider' />
      {hasHistory && (
        <ul data-testid='list'>
          {resultsHistory.map((results) => (
            <li key={results.timeStamp}>{results.results}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Scoreboard
