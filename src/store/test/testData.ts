import Choice from '../../types/Choice'
import { RootState } from '../store'

export const initialState: RootState = {
  game: {
    playerChoice: 'rock',
    results: undefined,
    resultsHistory: [{ timeStamp: 'test', results: 'win' }],
    locked: false,
  },
  rpsslApi: {
    queries: {},
    mutations: {},
    provided: {},
    subscriptions: {},
    config: {
      refetchOnFocus: false,
      refetchOnMountOrArgChange: false,
      refetchOnReconnect: false,
      online: true,
      focused: true,
      middlewareRegistered: false,
      reducerPath: 'rpsslApi',
      keepUnusedDataFor: 60,
    },
  },
}

export const choices: Choice[] = [
  {
    id: 1,
    name: 'rock',
  },
]
