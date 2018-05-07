import React from 'react';

class CreateAndEditPostPage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {

            categories: [
                {
                    "id": "category1",
                    "name": "Category 1"
                },
                {
                    "id": "category2",
                    "name": "Category 2"
                },
                {
                    "id": "category3",
                    "name": "Category 3"
                },
            ],

            post: {
                title: "",
                body: "",
                category: "",
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

    }

    onTitleChange(event) {
        const post = this.state.post;
        post.title = event.target.value;
        this.setState({post: post});
    }

    onBodyChange(event) {
        const post = this.state.post;
        post.body = event.target.value;
        this.setState({post: post});
    }

    onClickSave(event) {
        alert(`Saving ${this.state.post.title}`);
    }

    render() {
        return(
            <div>
                <h1>Create a Post</h1>

                <div>

                    <input
                    type="text"
                    placeholder="Title"
                    onChange={this.onTitleChange}
                    value={this.state.post.title} />

                    <input
                    type="text"
                    placeholder="Body"
                    onChange={this.onBodyChange}
                    value={this.state.post.body} />

                    <select>
                        <option value="move-to-option" disabled >Select category</option>
                        {this.state.categories.map( category => {
                            return <option key={category.id} value={category.id}>{category.name}</option>
                        })}
                    </select>

                    <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}
                    />
                </div>
            </div>
        );
    }

}

export default CreateAndEditPostPage;