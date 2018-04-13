import React from 'react';
import Loadable from 'react-loadable';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import PageLoading from './components/PageLoading';

const LoadableHome = Loadable({
  loader: () => import('./pages/Home'),
  loading: PageLoading,
  delay: 200,
});


const Routers = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoadableHome} key={Math.random()} />
    </div>
  </Router>
);

export default Routers;

