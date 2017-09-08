/**
 * Created by weiqiujuan on 17-9-5.
 */
import Login from '../components/login.js';
import {connect} from"react-redux";

const mapStateToProps=(state)=>{
    return{
        logSuccess:state.login.logSuccess,
        logInfo:state.login.logInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onLogin:(userInfo)=>{
            dispatch({
                type:'LOGIN',
                data:userInfo
            });
        },
        onChangeLogSuccess:()=>{
            dispatch({type:'CHANE_LOG_SUCCESS'});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps())(Login)