import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';

const routes = (
	<Route path='*' component={ App }>
	</Route>
);

export default routes;