import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchPosts } from './../actions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('Store is updated correctly', () => {
        const expectedState = [
            {
                title: "title1",
                body: "sometext"
            },
            {
                title: "title2",
                body: "sometext2"
            },
            {
                title: "title3",
                body: "sometext3"
            }
        ];

        const store = testStore();

        moxios.wait(() => {
            const requests = moxios.requests.mostRecent();
            requests.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
            .then(() => {
                const newState = store.getState();
                expect(newState.postReducer).toBe(expectedState);
            })
    });

});