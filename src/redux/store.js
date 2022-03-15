import { createStore, applyMiddleware } from 'redux'
import  rootReducer  from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const middlewares = [thunk,logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

