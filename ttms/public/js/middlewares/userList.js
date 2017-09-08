/**
 * Created by weiqiujuan on 17-9-7.
 */
import request from "superagent";

export default store =>next=>action=>{
    if(action.type==='SELECE_USER'){
        request.get('/userList')
            .end((err,res)=>{
            next({type:"SHOW_USERS",data:res.body})
            });
    }
    else next(action);
};