import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage.js'
import throttle from 'lodash/throttle'

const configureStore = () => {
  const persistedData = loadState()

  const store = createStore(todoApp, persistedData)

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos
      })
    }, 1000)
  )
  return store
}

export default configureStore
