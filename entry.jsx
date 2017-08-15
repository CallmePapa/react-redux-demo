
import React, {Component} from 'react';
import {render} from "react-dom";

class HelloMessage extends React.Component {

    render() {
        return <div>Hello World!!哈哈哈哈</div>;
    }
}
render(<HelloMessage />, document.getElementById('app'));


