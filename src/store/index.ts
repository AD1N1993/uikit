import { Action, configureStore } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { ThunkAction } from 'redux-thunk'

import createRootReducer from './rootReducer'

interface Arg {
  initialState?: typeof window.__INITIAL_STATE__
  url?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createStore = ({ initialState }: Arg = {}) => {
  const history = createBrowserHistory()
  const store = configureStore({
    preloadedState: initialState,
    reducer: createRootReducer(history),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), routerMiddleware(history)],
    devTools: __DEV__,
  })

  return { store, history }
}

const { store } = createStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>

export default createStore
