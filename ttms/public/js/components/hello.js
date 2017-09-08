/**
 * Created by weiqiujuan on 17-9-4.
 */
import React from "react";
console.log('test',React);

export default class Hello extends Component{
    displayhello(){
        this.props.onDisplayhello();
    }

    render(){
        return <div>
            {this.props.hello}
            <button onClick={this.displayhello.bind(this)}>点击</button>
        </div>
    }
}