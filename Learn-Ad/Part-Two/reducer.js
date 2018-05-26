

function combineReducers(reducers){
    return function (state={},action) {
        return Object.keys(reducers).reduce((nextState,key)=>{
            //调用一个reducer，并将由他管理的部分state传给它
            nextState[key]=reducers[key](state[key],action);
            return nextState;
       },{});
    }
}