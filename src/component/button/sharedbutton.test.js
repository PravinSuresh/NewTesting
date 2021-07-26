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
        beforeEach(() => {
            const props = {
                buttonText: 'text',
                emitEven: () => { }
            }
            wrapper = shallow(<SharedButton {...props} />);
        });
        it('should render a button', () => {
            const button = findByTestAttr(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    });
});