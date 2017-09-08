/**
 * Created by weiqiujuan on 17-9-5.
 **/
import request from 'superagent';
export default store=>next=>action=>{
    if(action.type ==='LOGIN'){
        request.post('./userInfo')
            .send(action.data)
            .end((err,res)=>{
            if(err){
                return;
            }
            consoel.log(res.body.logInfo);
            next({type:'LOFIN_SUCCESS',isSuccess:res.body.isSuccess, logInfo: res.body.logInfo})
            });
    }
    else
        next(action);
};