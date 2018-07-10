import { getAllPosts } from "../utils/api";

// Loading, Success, Failure - triplet action set.

export const FETCH_POSTS_BEGIN   = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});

export function fetchPosts() {
  return dispatch => {
    // Indicate that we started fetching posts.
    dispatch(fetchPostsBegin());
    return(getAllPosts()
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        // We got the posts, dispatch an action indicating this.
        dispatch(fetchPostsSuccess(json));
        return json;
      })
      // If there's an error while fetching, dispatch that as an action.
      .catch(error => dispatch(fetchPostsFailure(error))));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}