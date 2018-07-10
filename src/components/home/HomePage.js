import React, { Component } from 'react'
import PostsList from './PostsList';
import { connect } from "react-redux";
import * as postsActions from '../../actions/postsActions';

class HomePage extends Component {

    componentDidMount() {
        this.props.dispatch(postsActions.fetchPosts());
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

const mapStateToProps = state => ({
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error
  });


export default connect(mapStateToProps)(HomePage);
