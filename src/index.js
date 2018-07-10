import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './components/App';
import registerServiceWorker from './utils/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { fetchPosts } from "./actions/postsActions";

const store = configureStore();
// store.dispatch(fetchPosts());

ReactDOM.render((
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  ), document.getElementById('root'));
registerServiceWorker();
