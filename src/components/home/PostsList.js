import React from 'react';
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import PostListRow from "./PostListRow";

const PostsList = ({error, loading, posts}) => (

    error ? <div>Error loading data from the API: {error.message}</div> :
    loading ? <Loading delay={200} type='spin' color='#222' className='loading' /> :
    posts.map( post => <PostListRow post={post} />)

)

PostsList.propTypes = {
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired
}

export default PostsList;