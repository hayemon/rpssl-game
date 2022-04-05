import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import { rpsslApi } from './slices/apiSlice'
import gameReducer from './slices/gameSlice'

const rootReducer = combineReducers({
  game: gameReducer,
  [rpsslApi.reducerPath]: rpsslApi.reducer,
})

export const createStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rpsslApi.middleware),
    preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
