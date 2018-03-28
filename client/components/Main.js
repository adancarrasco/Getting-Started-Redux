import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* This could render the React children but as we can't pass the props
         we use reactClone instead {this.props.children */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
};

export default Main;
