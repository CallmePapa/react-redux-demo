/**
 * Created by weiqiujuan on 17-9-6.
 */
import ...
export default class Register extends Component {
    register() {
        const userName = this.refs.userPassword.value;
        const userPassword = this.refs.userPassword.value;
        const confirmPassword = this.refs.confirmPassword.value;

        if (!userName || !userPassword || !confirmPassword) {
            alert('The name or password cannot be empty');
            return;
        }
        if (userPassword !== confirmPassword) {
            alert('The confirm password is not correct');
            return;
        }
        this.props.onRegister({userName, userPassword, getUserConfirmation});
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.registerSuccess === true) {
            alert('register success');
            browserHistory.push('/login');
        } else if (nextProps.registerSuccess === false) {
            alert('register faild');
        }
    }

    render() {
        return <div>
            <div>
                <h2>注册</h2>
                <hr/>
                <div>
                    <label>帐号</label>
                    <input type="text" id="account" ref='useracount' />
                </div>
                <div>
                    <label>密码</label>
                    <input type="password" id="userPassword" ref="userPassword"/>
                </div>
                <div>
                    <label >确认密码</label>
                    <input type="password" id="confirmPassword" ref="confirmPassword"/>
                </div>
            </div>
            <button onClick={this.register.bind(this)}>注册</button>
        </div>
    }
}