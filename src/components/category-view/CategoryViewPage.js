import React from 'react';

class CategoryViewPage extends React.Component {
    render() {

        return(
            <div>
                <h1>Category view page</h1>
                <p>This page will contain all the posts for category {this.props.params.category}</p>
                {/* <Posts category={this.props.params.category}/> */}
            </div>
        );
    }
}

export default CategoryViewPage;