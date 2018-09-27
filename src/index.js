import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import Login from './components/login';
import Stats from './components/stats';
import StreamPage from './components/stream_page';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBayhfnyYS2lpTbbbzJ-ylCgim9HVZPV1w';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path ="/stats" component={Stats}/>
        <Route path ="/stream" component={StreamPage}/>
        <Route path ="/" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
