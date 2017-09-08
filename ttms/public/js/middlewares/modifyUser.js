/**
 * Created by weiqiujuan on 17-9-7.
 */
import request from'superagent';

export default  store => next => action => {
    if (action.type === 'UPDATE_USER') {
        request.post('/updateUser')
            .send(action.user)
            .end((err, res) => {
                next({type: 'UPDATE_USER_FLAG', date: res.body.tip});
            });
    }
    else next(action);
}