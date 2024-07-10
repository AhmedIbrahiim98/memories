import React from 'react';
import ReactDOM from "react-dom";

import { provider } from 'react-redux';
import {  applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
 
import { reducers } from './reducers';
import App from './App';

const store = configureStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <provider store={store}>
        <app />
    </provider>,
 document.getElementById('root')
)
