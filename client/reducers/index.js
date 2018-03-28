import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

// Combines the reducers from our reducers folder and export it as one rootReducer.
const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;