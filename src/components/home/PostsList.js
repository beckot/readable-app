import React from 'react';
import Loading from 'react-loading';
import PropTypes from 'prop-types';

function trim (str) {
    return str.length > 16
      ? str.slice(0, 16) + '...'
      : str
  }

const PostsList = ({error, loading, posts}) => (

    error ? <div>Error loading data from the API: {error.message}</div> :
    loading ? <Loading delay={200} type='spin' color='#222' className='loading' /> :
    posts.map( post => {
        return (
                <div key={post.id} className='post'>
                    <div>{trim(post.title)}</div>
                    <div>{post.body}</div>
                    <div>{post.author}</div>
                    <div>{post.category}</div>
                    <div>{Date(post.timestamp)}</div>
                </div>
            )
        }))

PostsList.propTypes = {
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired
}

export default PostsList;