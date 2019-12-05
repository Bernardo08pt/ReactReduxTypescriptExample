import { ActionsUnion, DispatchAction } from "../type";
import { createAction } from "../action";
import { Person } from "./type";

export enum ActionTypes {
  FETCH_PERSONS_REQUEST = "FETCH_PERSONS_REQUEST",
  FETCH_PERSONS_SUCCESS = "FETCH_PERSONS_SUCCESS"
}

export const Actions = {
  fetchPersonsRequest: () => createAction(ActionTypes.FETCH_PERSONS_REQUEST),
  fetchPersonsSuccess: (data: Array<Person>) => createAction(ActionTypes.FETCH_PERSONS_SUCCESS, data)
};

export type Actions = ActionsUnion<typeof Actions>;

export function fetchPersons(): DispatchAction {
  return async dispatch => {
    dispatch(Actions.fetchPersonsRequest());

    setTimeout(() => {
        let mockPersons : Array<Person> = [
            {
                name: "Bernardo",
                age: 26
            }, {
                name: "Zé",
                age: 20
            }
        ]

        dispatch(Actions.fetchPersonsSuccess(mockPersons));
    }, 1000)   
  };
}