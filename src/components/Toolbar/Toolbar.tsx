import { Button } from 'components/Button'
import React from 'react'
import { useGetChoicesQuery } from 'store/slices/apiSlice'
import styles from './index.module.scss'

const Toolbar: React.FC = () => {
  const { data, error } = useGetChoicesQuery()

  if (error) {
    return <h1>ERROR</h1>
  }

  return (
    <div className={styles.box}>
      {data?.map((choice) => (
        <Button key={choice.id} choice={choice} />
      ))}
    </div>
  )
}

export default Toolbar
