/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/


import React from 'react'
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);