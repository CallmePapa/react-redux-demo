/**
 * Created by weiqiujuan on 17-8-17.
 */

import React from 'react';
import {connect } from 'react-redux';

import { createStore,bindActionCreators } from 'redux';
import changeText from '../components/action.js';
import buttonClick from '../components/action.js';
import myApp from '../reducers/reduce.js';

let store =createStore(myApp);

function mapStateToProps(state) {
    return{
        test:state.text
    }
}

function mapDispatchToProps(dispatch){
    return{
        action:bindActionCreators({changeText:changeText,buttonClick:buttonClick},dispatch)
    }
}

App=connect(mapStateToProps,mapDispatchToProps)(App);