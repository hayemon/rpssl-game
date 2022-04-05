import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from 'store/hooks'
import ActionType from 'types/ActionType'
import { Results } from 'types/PlayResult'
import type { RootState } from '../store'
import { rpsslApi } from './apiSlice'

type ResultsHistory = {
  results: Results
  timeStamp: string
}

interface GameState {
  playerChoice: ActionType | undefined
  results: Results | undefined
  resultsHistory: ResultsHistory[]
  locked: boolean
}

const initialState: GameState = {
  playerChoice: undefined,
  results: undefined,
  resultsHistory: [],
  locked: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayerChoice: (state, action: PayloadAction<ActionType | undefined>) => {
      state.playerChoice = action.payload
    },
    resetResults: (state) => {
      state.results = undefined
    },
    clearResultsHistory: (state) => {
      state.resultsHistory = []
    },
    setLocked: (state, action: PayloadAction<boolean>) => {
      state.locked = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      rpsslApi.endpoints.play.matchFulfilled,
      (state, { payload }) => {
        state.results = payload.results
        const currentResult = {
          results: payload.results,
          timeStamp: new Date().toString(),
        }
        if (state.resultsHistory.length > 10) {
          const [first, ...rest] = state.resultsHistory
          state.resultsHistory = [...rest, currentResult]
        } else {
          state.resultsHistory.push(currentResult)
        }
      }
    )
  },
})

export const { setPlayerChoice, resetResults, clearResultsHistory, setLocked } =
  gameSlice.actions

export const selectPlayerChoice = () =>
  useAppSelector((state: RootState) => state.game.playerChoice)

export const selectResults = () =>
  useAppSelector((state: RootState) => state.game.results)

export const selectResultsHistory = () =>
  useAppSelector((state: RootState) => state.game.resultsHistory)

export const selectLocked = () =>
  useAppSelector((state: RootState) => state.game.locked)

export default gameSlice.reducer
