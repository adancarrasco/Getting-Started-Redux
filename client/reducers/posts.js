import {actionTypes} from './actiontypes';
// a reducer takes in two things:

// 1. The action Info (info about what happened)
// 2. Copy of the current state

function posts(state = [], action) {
  switch (action.type) {
    case actionTypes.INCREMENT_LIKES:
      // const _state = {...state};
      // _state.likes++;
      // state = _state;
      console.log('Incrementing likes');
      console.log(state, action);
      const index = action.index;
      return [
        ...state.slice(0, index), // Copy the exact state from before the one we are updating
        {...state[index], likes: state[index].likes + 1}, // Update the desired value
        ...state.slice(index + 1), // Copy the exact state from after the one we are updating
      ];
      break;
    default:
      return state;
  }
}

export default posts;
