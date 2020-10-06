import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Person from './Person';
import {ButtonStyle} from './utilities/Utilities';

const fetchPeople = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    return res.json();
}

const People = () => {
    const [page, setPage] = useState(1);
    const {data, status} = useQuery(['people', page], fetchPeople);

    return (<div>
        <h2>People</h2>
        
        <ButtonStyle onClick={() => setPage(1)}>Page 1</ButtonStyle>
        <ButtonStyle onClick={() => setPage(2)}>Page 2</ButtonStyle>
        <ButtonStyle onClick={() => setPage(3)}>Page 3</ButtonStyle>

        {status === 'error' && (<div>Error fetching data</div>)}
        {status === 'loading' && (<div>Lodaing data...</div>)}
        {status === 'success' && (<div>{data.results.map(person => <Person key={person.name} person={person}/>)}</div>)}
    </div>);
}

export default People;