/**
 * Created by weiqiujuan on 17-9-7.
 */
import request from'superagent';

export default  store => next => action => {
    if (action.type === 'DELETE_USER') {
        request.post('/deleteUser')
            .send(action.user)
            .end((err, res) => {
                next({type: 'DELETE_USER_FLAG', date: res.body.tip});
            });
    }
    else next(action);
}