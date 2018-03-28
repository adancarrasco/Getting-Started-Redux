import {actionTypes} from './actiontypes';
// a reducer takes in two things:

function postComments(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [
        ...state,
        {
          user: action.author,
          text: action.comment,
        },
      ];
      break;
    case actionTypes.REMOVE_COMMENT:
      // We need to return the new state without the deleted comment
      return [
        // From the start to the one we want to delete
        ...state.slice(0, action.index),
        // After the deleted one to the end
        ...state.slice(action.index + 1),
      ];
      break;
    default:
      return state;
  }
}

// 1. The action Info (info about what happened)
// 2. Copy of the current state

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // Take the current state
      ...state,
      // Overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
}

export default comments;
