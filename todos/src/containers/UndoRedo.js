import React from 'react';
import {ActionCreators as UndoActionCreators} from 'redux-undo';
import {connect} from 'react-redux';


//展示按钮组件
let UndoRedo = ({canUndo, canRedo, onUndo, onRedo}) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
        </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
        </button>
    </p>
);


//判断可否进行UndoRedo操作
const mapStateToProps = (state) => ({
    canUndo: state.todos.past.length > 0,
    canRedo: state.todos.future.length > 0
});


//UndoRedo操作
const mapDispatchProps = ({
    onUndo: UndoActionCreators.undo,
    onRedo: UndoActionCreators.redo
});

UndoRedo = connect(
    mapStateToProps,
    mapDispatchProps
)(UndoRedo);
export default UndoRedo;