import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { resetResults, setLocked, setPlayerChoice } from 'store/actions'
import { usePlayMutation } from 'store/slices/apiSlice'
import { selectLocked } from 'store/slices/gameSlice'
import Choice from 'types/Choice'
import urlMapper from 'utils/urlMapper'
import styles from './index.module.scss'

type Props = {
  choice: Choice
}

const Button: React.FC<Props> = ({ choice }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const dispatch = useDispatch()
  const [play] = usePlayMutation()
  const locked = selectLocked()
  const [disabled, setDisabled] = useState<boolean>(false)

  const handleClick = () => {
    if (locked) {
      return
    }
    dispatch(setPlayerChoice(undefined))
    dispatch(resetResults())
    dispatch(setLocked(true))

    setTimeout(() => {
      dispatch(setPlayerChoice(choice.name))
    }, 100)

    setTimeout(() => {
      buttonRef.current?.blur()
      setDisabled(true)
    }, 600)

    setTimeout(() => {
      play(choice.id)
      dispatch(setLocked(false))
      setDisabled(false)
    }, 3000)
  }

  return (
    <button
      role='button'
      ref={buttonRef}
      className={`glass ${styles.box}`}
      disabled={disabled}
      onClick={handleClick}
    >
      <img src={urlMapper[choice.name]} />
    </button>
  )
}

export default Button
