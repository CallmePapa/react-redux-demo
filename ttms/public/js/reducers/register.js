/**
 * Created by weiqiujuan on 17-9-6.
 */
export default (state={registerSuccess:"",flag:false},action)=>{
    if(action.type==='REGISER_SUCCESS'){
        state.registerSuccess=action.isSuccess;
        return Object.assign({},state);
    }
    return state;
}