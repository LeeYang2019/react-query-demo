import React from 'react';
import {CardDiv} from './utilities/Utilities';

const Person = ({person}) => {
return (<CardDiv>
    <h3>{person.name}</h3>
    <p>Gender - {person.gender}</p>
    <p>Birth-year - {person.birth_year}</p>
</CardDiv>)
}

export default Person;