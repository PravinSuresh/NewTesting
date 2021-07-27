import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import SharedButton from '.';

describe('Shared Button component', () => {

    describe('Checking Proptypes', () => {
        it('should not throw warning', () => {
            const expectedProps = {
                buttonText: 'text',
                emitEven: () => { }
            };
            const propError = checkProps(SharedButton, expectedProps);
            expect(propError).toBe(undefined);
        })
    });

    describe('Renders', () => {

        let wrapper;
        let mockfunc;
        beforeEach(() => {
            mockfunc = jest.fn();
            const props = {
                buttonText: 'text',
                emitEvent: mockfunc
            }
            wrapper = shallow(<SharedButton {...props} />);
        });
        it('should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('should emit callback on click event', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockfunc.mock.calls.length;
            expect(callback).toBe(1);
        });
    });
});