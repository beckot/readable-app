import { FETCH_POSTS_BEGIN,
         FETCH_POSTS_SUCCESS,
         FETCH_POSTS_FAILURE
        } from '../actions/postsActions';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function postsReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_POSTS_BEGIN:
            // Mark the state as 'loading...'
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POSTS_SUCCESS:
            // Found posts, set loading to false.
            // Also, replace posts from ones from the server.
            return {
                ...state,
                loading: false,
                items: action.payload.posts
            };

        case FETCH_POSTS_FAILURE:
            // The request failed, but it did stop, so set loading to 'false'.
            // Save the error, and we can display it somewhere
            // Since it failed, we don't have items to display anymore, so set it empty.
            // This is up to you and your app though: maybe you want to keep the items
            // around! Do whatever seems right.
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
};