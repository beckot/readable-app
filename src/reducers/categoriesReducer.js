import { FETCH_CATEGORIES_BEGIN,
         FETCH_CATEGORIES_SUCCESS,
         FETCH_CATEGORIES_FAILURE
        } from '../actions/categoriesActions';

const initialState = {
    items: [],
    loading: false,
    error: null
}

export default function categoriesReducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_CATEGORIES_BEGIN:
            // Mark the state as 'loading...'
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_CATEGORIES_SUCCESS:
            // Found categories, set loading to false.
            // Also, replace categories from ones from the server.
            return {
                ...state,
                loading: false,
                items: action.payload.categories
            };

        case FETCH_CATEGORIES_FAILURE:
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