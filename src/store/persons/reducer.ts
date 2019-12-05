
import { Actions } from "../type";

import { ActionTypes } from "./action";
import { Person } from "./type";

export type PersonsState = {
  data?: Array<Person>;
  isFetching: boolean;
};
const initialState: Readonly<PersonsState> = {
    isFetching: false
};

export function reducer(
  state: PersonsState = initialState,
  action: Actions
): PersonsState {
  switch (action.type) {
    case ActionTypes.FETCH_PERSONS_REQUEST: {
     
      return { isFetching: true };
    }
    case ActionTypes.FETCH_PERSONS_SUCCESS: {
        const data = action.payload;
        return { 
            data,
            isFetching: false
         };
      }
    default:
      return state;
  }
}