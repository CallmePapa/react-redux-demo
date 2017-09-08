/**
 * Created by weiqiujuan on 17-9-7.
 */

import UserList from'../components/userList.js'
import {commect}from "react-redux";

const mapStateToProps=(state)=>{
    return {
        user:state.userList.user,
        deleteFlag:state.userList.deleteFlag,
        updateFlag:state.userList.updateFlag,
    }
}

const mapDispathToProps=(dispatch)=>{
    return{
        OnDisplayUsers:()=>{
            dispatch({type:'SELECE_USER'});
        },
        onDeleteUser:(id)=>{
            dispatch({type:'DELETE_USER',id});
        }
        onModifyUser:(user)=>{
            dispatch({type:'UPDATE_USER',user});
        }
    }
}

export default  connect(mapStateToProps,mapDispathToProps);