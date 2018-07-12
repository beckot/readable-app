import React, { Component } from 'react'
import PostsList from './PostsList';
import { connect } from "react-redux";
import {fetchPosts} from '../../actions/postsActions';
import PropTypes from 'prop-types';

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts());
    }

    render() {
    return (
        <div>
            <h1>Readable</h1>
            <PostsList {...this.props} />
        </div>
    )
  }
}

HomePage.propTypes = {
    posts: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
  });


export default connect(mapStateToProps)(HomePage);
