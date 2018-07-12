import React from 'react';

export default (props) => (
    <div>
        <h1>Category view page</h1>
        <p>This page will contain all the posts for category <strong>{props.match.params.category}</strong></p>
    </div>
)