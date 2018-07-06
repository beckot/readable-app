import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from '../home/HomePage';
import CategoryViewPage from '../category-view/CategoryViewPage';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/category/:category' component={CategoryViewPage}/>
        </Switch>
    </main>
)

export default Main;