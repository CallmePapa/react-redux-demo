import React, {Component} from 'react';
import PropTypes from 'prop-types'

const GITHUB_REPO = 'https"//github.com/weiqiujuan';

export default class Explore extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value);
        }
    }

    getInputValue = () => {
        return this.input.value;
    };

    setInputValue = (val) => {
        this.input.value = val;
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleGoClick();
        }
    };

    handleGoClick = () => {
        this.props.onChange(this.getInputValue());
    };

    render() {
        return (
            <div>
                <p>please input you want to search repo name or github username</p>
                <input type="text" value="input" size="45"
                       ref={(input) => this.input = input}
                       defaultValue={this.props.value}
                       onKeyUp={this.handleKeyUp}/>
                <button onClick={this.handleGoClick()}>
                    Go!
                </button>
                <p>
                    Code on <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer"> GitHub </a>
                </p>
                <p>
                    Move the DevTools with Ctrl+W or hide them with Ctrl+H.
                </p>
            </div>
        )
    }
}