import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from './../Utils/index';
import React from 'react';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
};


describe("App component", () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            postReducer: [{ title: 'title1', body: "description" }, { title: 'title2', body: "description" }, { title: 'title3', body: "description" }]
        };
        wrapper = setUp(initialState);
        console.log(wrapper.debug());
    });

    it('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appy');
        expect(component.length).toBe(1);
    })
});