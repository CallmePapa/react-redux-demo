/**
 * Created by weiqiujuan on 17-8-17.
 */
import React from 'react';

function changeText() {
    return {
        type: 'CHANGE_TEXT';
    }
}

function buttonClick() {
    return {
        type: 'BUTTON_CLICK';
    }
}

export default changeText;
export default buttonClick;