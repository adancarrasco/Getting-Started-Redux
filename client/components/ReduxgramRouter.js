import React from 'react';

// Import React Router deps
import {Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from '../store';

// Import Components
import App from './App';
import Single from './Single';
import PhotoGrid from './PhotoGrid';

const ReduxgramRouter = () => (
  <Provider store={ store }>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

export default ReduxgramRouter;
