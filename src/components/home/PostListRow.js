import React from 'react';
import PropTypes from 'prop-types';

function trim (str) {
    return str.length > 16
      ? str.slice(0, 16) + '...'
      : str
  }

const PostListRow = ({post}) => {
  return (
    <div key={post.id} className='post'>
        <div>{trim(post.title)}</div>
        <div>{post.body}</div>
        <div>{post.author}</div>
        <div>{post.category}</div>
        <div>{Date(post.timestamp)}</div>
    </div>
  )
}

PostListRow.propTypes = {
    post: PropTypes.object.isRequired
}

export default PostListRow;