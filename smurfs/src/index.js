import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./store/reducers";

ReactDOM.render( <Provider store = { createStore( reducers, applyMiddleware( thunk ) ) }> <App /> </Provider>, document.getElementById('root') );
