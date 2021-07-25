import { types } from '../../actions/types';
import postReducer from './reducer';

describe("Posts reducers", () => {

    it('should return default state', () => {
        const newState = postReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return a new state if recieving a type', () => {
        const posts = [{ title: 'Test1' }, { title: 'Test2' }, { title: 'Test3' }, { title: 'Test4' }];
        const newState = postReducer(undefined, { type: types.GET_POSTS, payload: posts });
        expect(newState).toEqual(posts);
    });
});