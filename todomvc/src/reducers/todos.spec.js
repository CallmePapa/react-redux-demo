import todos from './todos';
import * as types from '../constants/ActionTypes'

describe('todos reducer', function () {
    it('should handle initial state', function () {
        expect(
            todos(undefined, {})
        ).toEqual([
            {
                text: 'User Redux',
                completed: false,
                id: 0
            }
        ])
    });

    it('should handle ADD_TODO', function () {
        expect(
            todos([], {
                type: types.ADD_TODO,
                text: 'Run the tests'
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: false,
                id: 0
            }
        ]);

        expect(
            todos([{
                text: 'Use Redux',
                completed: false,
                id: 0
            }], {
                type: types.ADD_TODO,
                text: 'Run the tests'
            }).toEqual([
                {
                    text: 'USer Redux',
                    completed: false,
                    id: 0
                }, {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ])
        );
        expect(
            todos([
                {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }, {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ], {
                type: types.ADD_TODO,
                text: 'Fix the tests'
            })
        ).toEqual([
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            },
            {
                text: 'Run the tests',
                completed: false,
                id: 1
            },
            {
                text: 'Fix the tests',
                completed: false,
                id: 2
            }
        ])

    });

    it('should handle DELETE_TODO', function () {
        expect(
            todos([{
                text: 'USe rendux',
                completed: false,
                id: 0
            }, {
                text: 'Run the tests',
                completed: false,
                id: 1
            }], {
                type: types.DELETE_TODO,
                id: 1
            })
        ).toEqual([{
            text: 'Use Redux',
            completed: false,
            id: 0
        }])
    });

    it('should handle EDIT_TODO', function () {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.EDIT_TODO,
                text: 'Fx the tests',
                id: 1
            })
        ).toEqual({
            text: 'Fix the tests',
            completed: false,
            id: 1
        }, {
            text: 'Use Redux',
            completed: false,
            id: 0
        })
    });

    it('should handle COMPLETE_TODO', function () {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.COMPLETE_TODO,
                id: 1
            }).toEqual([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }])
        )
    });

    it('should handle COMPLETE_ALL_TODOS', function () {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.COMPLETE_ALL_TODOS
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: true,
                id: 1
            }, {
                text: 'Use Redux',
                completed: true,
                id: 0
            }
        ])
    });

    it('should handle CLEAR_COMPLETED', function () {
        expect(
            todos([
                {
                    text: 'Run the tests',
                    completed: true,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: types.CLEAR_COMPLETED
            })
        ).toEqual([
            {
                text: 'Use Redux',
                completed: false,
                id: 0
            }
        ])
    });

    it('should not generate duplaicate ids after CLEAR_COMPLETED', function () {
        expect(
            [
                {
                    type: types.COMPLETE_TODO,
                    id: 0
                }, {
                type: types.CLEAR_COMPLETED
            }, {
                type: types.ADD_TODO,
                text: 'Wirte more tests'
            }
            ].reduce(todos, [
                {
                    id: 0,
                    completed: false,
                    text: 'Use Redux'
                }, {
                    id: 1,
                    completed: false,
                    text: 'Write tests'
                }
            ])
        ).toEqual([
            {
                text: 'Write tests',
                completed: false,
                id: 1
            }, {
                text: 'Write more tests',
                completed: false,
                id: 2
            }
        ])
    });
});
