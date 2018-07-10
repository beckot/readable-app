
// const API_URL = process.env.REACT_APP_API_URL;
// const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = "http://localhost:3001";
const API_KEY = "foo";
const FETCH_OPTIONS = {
    method: 'get',
    headers: new Headers({
        'Authorization': API_KEY
    })
};

export function getAllPosts () {
  return fetch(`${API_URL}/posts/`, FETCH_OPTIONS );
}
