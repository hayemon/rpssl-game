import { useEffect, useState } from 'react'
import ActionType from 'types/ActionType'

type UseCountdown = (initialState?: ActionType) => number

const useCountdown: UseCountdown = (initialState) => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    if (initialState === undefined) {
      return
    }
    setCount(3)
  }, [initialState])

  useEffect(() => {
    if (count <= 0) return

    const intervalId = setInterval(() => {
      setCount(count - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [count])

  return count
}

export default useCountdown
