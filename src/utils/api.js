
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const GET_OPTIONS = {
    method: 'get',
    headers: new Headers({
        'Authorization': API_KEY
    })
};

export function getAllPosts () {
  return fetch(`${API_URL}/posts/`, GET_OPTIONS );
}

export function getAllCategories () {
    return fetch(`${API_URL}/categories/`, GET_OPTIONS );
  }
