import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils/index';
import ListItem from './index';

describe('List Item', () => {
    describe('Checking PropTypes', () => {
        it('should not throw a warning', () => {
            const expectedProps = {
                title: 'title',
                desc: 'description'
            };
            const propError = checkProps(ListItem, expectedProps);
            expect(propError).toBeUndefined();
        });
    });
    describe('Component renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: "title",
                desc: "description"
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('should render without any errors', () => {
            const component = findByTestAttr(wrapper, 'list-item-component');
            expect(component.length).toBe(1);
        });

        it('should render a title', () => {
            const component = findByTestAttr(wrapper, 'list-item-title');
            expect(component.length).toBe(1);
        });

        it('should render a description', () => {
            const component = findByTestAttr(wrapper, 'list-item-description');
            expect(component.length).toBe(1);
        });
    });

    describe('it should not render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: undefined,
                desc: undefined
            };
            wrapper = shallow(<ListItem {...props} />);
        });
        it('should return null', () => {
            const component = findByTestAttr(wrapper, 'list-item-component');
            // expect(component).toEqual({});
            expect(component.length).toBe(0);
        });
    });
});
