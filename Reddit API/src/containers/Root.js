import React, {Component} from 'react';
import {Provider} from 'react-redux';
import confingureStore from '../configureStore';
import AsyncApp from './AsyncApp'

const store = confingureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp/>
            </Provider>
        )
    }
}