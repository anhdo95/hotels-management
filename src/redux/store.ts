import { createStore, /* applyMiddleware */ } from 'redux'

import rootReducer from '@/redux'

const store: any = createStore(rootReducer)

if (process.env.NODE_ENV === 'development') {
  (global as any)._store = store
}

export default store
