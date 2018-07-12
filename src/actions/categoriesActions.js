import {getAllCategories} from '../utils/api';

// Loading, Success, Failure - triplet action set.

export const FETCH_CATEGORIES_BEGIN   = 'FETCH_CATEGORIES_BEGIN';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesFailure = error => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

export function fetchCategories() {
  return dispatch => {
    // Indicate that we started fetching categories.
    dispatch(fetchCategoriesBegin());
    return(getAllCategories()
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        // We got the categories, dispatch an action indicating this.
        dispatch(fetchCategoriesSuccess(json.categories));
        return json.categories;
      })
      // If there's an error while fetching, dispatch that as an action.
      .catch(error => dispatch(fetchCategoriesFailure(error))));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}