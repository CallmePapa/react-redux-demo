/**
 * Created by weiqiujuan on 18-5-11.
 */
import {createStore, combineReducers, applymiddleware} from 'redux';

let todoApp = combineReducers(reducers);
let store = createStore(
    todoApp,
    applymiddleware(logger, crashReporter)
);
store.dispatch(addTodo('Use redux'));