import React from 'react'
import ReactDOM from 'react-dom'

require('../styles/main.sass')
require('../res/favicon.ico')

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer from './redux/reducers'

import App from './view/App'


const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
