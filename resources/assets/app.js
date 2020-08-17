require('./bootstrap');
import React, { Component } from 'react';
import {render} from 'react-dom';
import {Router, Route, browerHistory} from 'react-router';

import Master from './components/Master';
import CreateProduct from './components/CreateProduct';
import DisplayProduct from './components/DisplayProduct';
import UpdateProduct from './components/UpdateProduct';

render(
    <Router history={browerHistory}>
        <Route path="/" component={Master}>
            <Route path="/add-item" component={CreateProduct}></Route>
            <Route path="/display-item" component={DisplayProduct}></Route>
            <Route path="/edit/:id" component={UpdateProduct}></Route>
        </Route>
    </Router>,
    document.getElementById('crud-app')
);