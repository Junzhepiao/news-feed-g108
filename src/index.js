import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import {getArticles} from './redux/actions'

let newStore = store()

newStore.dispatch(getArticles())


ReactDOM.render(
<Provider store={newStore}>
<App />
</Provider>, document.getElementById('root'));
