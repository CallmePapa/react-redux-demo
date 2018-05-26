import React from 'react';
import {createRenderer} from 'react-test-renderer/shallow';
import App from '../App';
import Header from '../../containers/Header';
import MainSection from '../../containers/MainSection';



/*在测试components的时候。我们需要创建一个叫steup()的辅助方法,用来把模拟过的回调函数当作props传入，然后使用React浅渲染来渲染组件，这样就可以依据是否调用回调函数的断言来写独立的测试。*/
const setup = (propOverrides) => {
    const renderer = createRenderer();
    renderer.render(
        <App/>
    );
    const output = renderer.getRenderOutput();
    return output;
};

describe('components', () => {
    describe('Header', () => {
        it('should render', () => {
            const output = setup();
            const [header] = output.props.children;
            expect(header.type).toBe(Header);
        })
    });
    describe('Mainsection', () => {
        it('should render', () => {
            const output = setup();
            const [, mainSection] = output.props.children;
            expect(mainSection.type).tobe(MainSection);
        })
    })
});

