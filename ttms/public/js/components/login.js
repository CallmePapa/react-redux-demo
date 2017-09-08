/**
 * Created by weiqiujuan on 17-9-4.
 */
require('../../css/style.css')
import ...

export default class Login extends Component {

    login() {
        const userName = this.refs.userName.value;
        const userPassword = this.refs.userPassword.value;

        if (!userName || !userPassword) {
            alert("The name or password connot be empty");
            return;
        }
        this.props.onLogin({userName, userPassword});
    }

  /*  componentWillReceiveProps(nextProps) {
        if (nextProps.logSuccess === true && nextProps.logInfo === "success") {
            alert(nextProps.logInfo);
            browserHistory.push('/userList');
        } else if (nextProps.logSuccess === false && nextProps.logInfo === "password is not correct") {
            alert("login failed because password is not correct");
        } else if (nextProps.logSuccess === false && nextProps.logInfo === "user not exites") {
            alert("user not exites");
            browserHistory.push('/register')
        }

        this.props.onChangeLogSuccess();
    }*/
  render(){
      return <div className="contaib-fluid">
          <div className=''>
              <h2>登 录</h2>
              <hr/>
              <div className="">
                  <label className="">帐号</label>
                  <input type="text"id="account"ref="userName" className=""/>
              </div>

              <div>
                  <label className="">密码</label>
                  <input type="password"id="password"ref="userpasswrd"className=""/>
              </div>
              <button className="" onClick={this.login.bind(this)}>登录</button>
          </div>
      </div>;
  }

}