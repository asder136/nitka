import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.scss';
import { Main, Layout } from './containers';
import { text } from './reducers';

const store = createStore(text);

render(
    <Provider store={store}>
        <div className="app">
            <Router>
                <Route exact path='/' component={() => (<Main/>)}/>
                <Route exact path='/layout' component={() => (<Layout/>)}/>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
