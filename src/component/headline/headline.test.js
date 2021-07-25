import React from 'react';
import Headline from '.';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';

const setUp = (props = {}) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('Headline', () => {

    describe('Checking Proptypes', () => {

        it('it should not throw a warning', () => {
            const expectedProps = {
                header: 'testheader',
                desc: 'testdescription',
                tempArr: [{
                    fName: "fName",
                    lName: "lName",
                    age: 1,
                    email: "email@email.com",
                    onlineStatus: true
                }]
            };
            const propErr = checkProps(Headline, expectedProps);
            expect(propErr).toBe(undefined);
        });
    });

    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: "Headline",
                desc: "description"
            };
            wrapper = setUp(props);
        });
        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(1);
        });
        it('should render a h1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });
        it('should render a description', () => {
            const desc = findByTestAttr(wrapper, 'description');
            expect(desc.length).toBe(1);
        });
    });

    describe('Have no props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        });
        it("should not render", () => {
            const component = findByTestAttr(wrapper, 'headline-component');
            expect(component.length).toBe(0);
        });
    });
});