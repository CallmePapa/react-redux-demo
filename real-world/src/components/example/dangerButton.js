import React, {Component} from 'react';
import Button from './button'; //从另一个文件导入一个组件


class DangerButton extends Component {
    render() {
        return <Button color="red"/>;
    }
}
export default DangerButton;

