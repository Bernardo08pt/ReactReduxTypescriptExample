import { combineReducers, Reducer } from "redux";

import { Actions, State } from "./type";
import { reducer as persons } from "./persons";

export const reducer: Reducer<State, Actions> = combineReducers({ 
    persons 
});