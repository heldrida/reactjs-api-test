import React from 'react';
import ReactDOM from "react-dom";
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { syncHistoryWithStore } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history } routes={ routes } />
	</Provider>,
    document.getElementById('app')
);