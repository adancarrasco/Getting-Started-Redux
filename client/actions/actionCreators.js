import { actionTypes } from '../reducers/actiontypes';

// increment
export function increment(index) {
  // Send as little information as we can that's why we only send the index
  return {
    type: actionTypes.INCREMENT_LIKES,
    index
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: actionTypes.ADD_COMMENT,
    postId,
    author,
    comment
  }
}

// remove comment
export function removeComment(postId, index) {
  return {
    type: actionTypes.REMOVE_COMMENT,
    postId,
    index
  }
}