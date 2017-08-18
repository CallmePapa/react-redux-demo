/**
 * Created by weiqiujuan on 17-8-17.
 */

import React from "react";
import changeText from '../components/action.js';
import buttonClick from '../components/action.js';

const initialState ={
    text:"hello"
}

function myApp(state=initialState,action) {
    switch (action.type){
        case "CHANGE_TEXT":
            return{text:state.text ='Hello'?'Stark':'Hello'}
        case "BUTTON_CLICK":
            return{text:'You just click button'}
        default:
            return{
                text:'Hello'
            }
    }
}
export default myApp;