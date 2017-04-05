import React from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Home from '../views/Home.js';
import Abdullah from '../views/Abdullah.js';
import ReactChips from '../views/ReactChips.js';

import { Route, Router, browserHistory, IndexRedirect, IndexRoute} from 'react-router';

export default (
	<Router>
		<Route path={"/home"} component={Blank}>
		<IndexRoute component={Home}/>
    	</Route>
    	<Route path={"/abdullah"} component={Blank}>
		<IndexRoute component={Abdullah}/>
		</Route>
		<Route path={"/chips"} component={Blank}>
		<IndexRoute component={ReactChips}/>
		</Route>
	</Router>
);
