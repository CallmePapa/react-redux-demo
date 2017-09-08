/**
 * Created by weiqiujuan on 17-9-6.
 */
import Register  from '../components/register';
import {connect} from'react-redux';

const mapStateToProps=(state)=>{
    return{
        registerSuccess:state.register.registerSuccess,
    }
}

const mapDispathToProps=(dispatch)=>{
    return{
        onRegister:(registerInfo)=>{
            dispatch({type:"REGISTER",data:registerInfo})
        },
    }
}

export default connect(mapDispathToProps,mapDispathToProps())