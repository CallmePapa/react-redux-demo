/**
 * Created by weiqiujuan on 17-9-6.
 */
export default (state={logSuccess:'',logInfo:''},action)=>{
    if(action.type ==='LOFIN_SUCCESS'){
        state.logSuccess=action.isSuccess;
        state.logInfo=action.logInfo
        return Object.assign({},state);
    }
    return state;
}