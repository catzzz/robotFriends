import { act } from "react-dom/test-utils";
import { CHANGE_SEARCH_FIELD } from "./constants"


const initialState  = {
    searchField:''
}

export const searchRobotsReducer = (state = initialState, action ={}) => {
    switch (action.type){
        case CHANGE_SEARCH_FIELD:
            //return Object.assign({}, state, {searchField :action.payload }); // same as spread function below
            return {...state, searchField: action.payload};
        default:
            return state;
    }
}