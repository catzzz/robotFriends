
import * as reducers from './reducers'
import * as types from './constants'



describe("searchRobots", () => {
  const initialSateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });
  it("should handle change CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialSateSearch, {
        type: types.CHANGE_SEARCHFIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});


  const initialStateRobots = {
    robots: [],
    isPending: true,
    error:''
  }
  describe('requestRobots reducer', () => {
    it('should return the initial state', () => {
      expect(reducers.requestRobots(undefined, {})).toEqual(
        {
          robots: [],
          isPending: true,
          error:''
        }
      )
    })
  
    it('should handle REQUEST_ROBOTS_PENDING action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: types.REQUEST_ROBOTS_PENDING,
          payload: {isPending: true}
        })
      ).toEqual(
        {
          robots: [],
          isPending: true,
          error:''
        }
      )
    })
    it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: types.REQUEST_ROBOTS_SUCCESS,
          payload: [{
              id: '123',
              name: 'test',
              email: 'j@jmail.com'
            }]
        })
      ).toEqual(
        {
          robots: [{
            id: '123',
            name: 'test',
            email: 'j@jmail.com'
          }],
          isPending: false,
          error:''
        }
      )
    })
    it('should handle REQUEST_ROBOTS_FAILED action', () => {
      expect(
        reducers.requestRobots(initialStateRobots, {
          type: types.REQUEST_ROBOTS_FAILED,
          payload: 'NOOO'
        })
      ).toEqual(
        {
          error: 'NOOO',
          robots: [],
          isPending: true
        }
      )
    })
  })