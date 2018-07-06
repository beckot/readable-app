import {
    ADD_POST,
  } from '../actions/postsActions';

export default function postsReducer( state = [], action) {

    const { post } = action

    switch(action.type) {
        case ADD_POST:
            return [...state,
                    Object.assign({}, post),
                    // ...post,
                    // JSON.parse(JSON.stringify(post))
                ];
        default:
            return state;
    }
}