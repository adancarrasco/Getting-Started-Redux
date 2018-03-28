import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

// Create an object for the default data
const defaultState = {
  posts,
  comments
};

// Initialize the store with the rootReducer (which contains the reducers) 
// and the default state (our initial data)
const store = createStore(rootReducer, defaultState);

// Syncs the browserHistory with the store so redux can have access 
// to the browser the history and manage it
export const history = syncHistoryWithStore(browserHistory, store);

export default store;