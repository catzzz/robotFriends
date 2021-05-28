import * as types from './constants';
import * as  actions from './actions'; 
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk';



export const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots',()=>{
    const text = 'woo';
    const expectedAction = {
        type:types.CHANGE_SEARCHFIELD,
        payload:text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction);
})

describe("Fetch robots action PENDING", () => {
    it("should creat a Pending action on request Robots", () => {
      const store = mockStore();
      store.dispatch(actions.requestRobots())
      const action = store.getActions();
      console.log(action)
      expect(action[0]).toEqual({type: "REQUEST_ROBOTS_PENDING"});
    });
  });