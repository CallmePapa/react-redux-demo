import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';
import {Header} from './Header';

const setup = () => {
    const props = {
        addTodo: jest.fn()
    };

    const renderer = createRenderer();
    renderer.render(<Header {...props}/>)
    const output = render.getRenderOutput();

    return {
        props: props,
        output: output,
        renderer: renderer
    }
};

describe('components', function () {
    describe('Header', function () {
        it('should render correctly', function () {
            const {output} = setup();
            expect(output.type).toBe('header');
            expect(output.props.className).toBe('header');

            const [h1, input] = output.props.children;
            expect(h1.type).toBe('h1');
            expect(h1.props.children).toBe('todos');
            expect(input.type).toBe(TodoTextInput);
            expect(input.props.newTodo).toBe(true);
            expect(input.props.placeholder).toBe("What needs to be done?")
        });

        it('should call addTodo if lenght of text is freater than 0', function () {
            const {output, props} = setup();
            const input = output.props.children[1];
            input.props.onSave('');
            expect(props.addTodo).not.toBeClaled();
            input.props.onSave('USer Redux');
            expect(props.addTodo).toBeCalled()
        });
    });
});