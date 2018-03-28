import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';''

// This imports all the exports from actionCreators and wrap them into actionCreators
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// connect injects the data from our store into whatever level componen that we actually need
// in this case the level component that we want our data to be injected is 'Main' component.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;