import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  render() {
    // index of the post
    const {postId} = this.props.params;

    const index = this.props.posts.findIndex((post) => post.code === postId);

    // get us the post
    const post = this.props.posts[index];

    // get the comments from the post
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo post={post} index={index} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
}

export default Single;
