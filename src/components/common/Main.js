import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../home/HomePage';
import CategoryViewPage from '../category-view/CategoryViewPage';
import PostDetailsPage from '../post-details/PostDetailsPage';
import CreateAndEditPostPage from '../create-and-edit-post/CreateAndEditPostPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/category/:category' component={CategoryViewPage}/>
            <Route exact path='/posts/:post' component={PostDetailsPage}/>
            <Route exact path='/new/post' component={CreateAndEditPostPage}/>
            <Route exact path='/posts/:post/edit' component={CreateAndEditPostPage}/>
        </Switch>
    </main>
)

export default Main;