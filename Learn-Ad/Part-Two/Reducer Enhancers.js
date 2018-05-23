function undoable() {
    //用一个空的action来调用reducer来产生初始的state;
    const initialState = {
        past: [],
        present: reducer(undefined, {}),
        future: []
    };

    //返回一个可以执行撤销和重做的新的reducer

    return function (state = initialState, action) {
        const {past, present, future} = state;

        switch (action.type) {
            case "UNDO":
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future]
                };
            case"REDO":
                const next = future[0];
                const newFuture = future.slice(1);
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture
                };
            default:
                //将其他action委托给原始的reducer处理
                const newPresent = reducer(present, action);
                if (present === newPresent) {
                    return state;
                }
                return {
                    past: [...past, present],
                    present: newPresent,
                    future: []
                };
        }
    }
}