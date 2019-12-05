import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store/type"
import { fetchPersons } from "../../store/persons";

interface Props {

}

export const Persons: React.FC<Props> = props => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPersons());
    }, []);

    const { data, isFetching} = useSelector((state: State) => state.persons); 

    return <div>
        {isFetching && <span>Loading....</span>}
        {!isFetching && data && data.map(person => <div>{person.name} {person.age}</div>)}
    </div>
}