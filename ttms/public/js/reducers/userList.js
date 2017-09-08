/**
 * Created by weiqiujuan on 17-9-7.
 */
export default (state={user:[]},action)=>{
    if(action.type==="SHOW_USERS"){
        state.user=action.data;

        return Object.assign({},state);
    }

    if(action.type ==='DELETE_USER_FLAG'){
        switch (action.data){
            case "success":
                state.deleteFlag=true;
                break;
            default:state.deleteFlag=false;
        }
        return  Object.assign({},state);
    }

    if(action.type==='UPDATA_USER_FLAG'){
        switch(action.data){
            case'success':
                state.updateFlag=true;
                break;
            default:state.updateFlag=false;
        }
        return Object.assign({},state);
    }
    return state;
}