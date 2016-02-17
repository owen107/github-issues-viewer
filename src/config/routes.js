//*****************************************************************
//  React Router for configing the routes for the app
//*****************************************************************

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../pages/Main';
import Details from '../pages/Details';
import Default from '../pages/Default';

export default (
	<Route path="/" component={Main}>
	  <IndexRoute component={Default} />
	  <Route path="issues/:number" component={Details} />
	</Route>
);