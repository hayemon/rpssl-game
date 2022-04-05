import React from 'react'
import { Results } from 'types/PlayResult'
import styles from './index.module.scss'

type Props = {
  results: Results | undefined
}

const mapper: Record<Results, { text: string; className: string }> = {
  win: {
    text: 'You win!',
    className: styles.win,
  },
  lose: {
    text: 'You lose!',
    className: styles.lose,
  },
  tie: {
    text: 'Tie...',
    className: styles.tie,
  },
}

const ResultsMessage: React.FC<Props> = ({ results }) => {
  if (results === undefined) {
    return null
  }

  const mappedValue = mapper[results]

  return (
    <div className={`glass ${styles.box}`}>
      <h1 className={mappedValue.className}>{mappedValue.text}</h1>
    </div>
  )
}

export default ResultsMessage
