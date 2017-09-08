/**
 * Created by weiqiujuan on 17-8-17.
 */
import React from 'react';

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.action.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick}>change</button>
        );
    }
}

render(
    <Change/>,
    document.getElementById('root')
);

export default  Change;