import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '@redux/store';

import App from '@/App'

ReactDOM.render(
  <Provider store={store}>
    <App todo={{ a: 1 }} />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
