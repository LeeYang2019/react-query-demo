import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
import {ButtonStyle} from './utilities/Utilities';

const fetchPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [page, setPage] = useState(1);
    const {data, status} = useQuery(['planets', page], fetchPlanets);
    console.log(data);
    return (<div>
        <h2>Planets</h2>
        
        <ButtonStyle onClick={() => setPage(1)}>Page 1</ButtonStyle>
        <ButtonStyle onClick={() => setPage(2)}>Page 2</ButtonStyle>
        <ButtonStyle onClick={() => setPage(3)}>Page 3</ButtonStyle>

        {status === 'error' && (<div>Error fetching data</div>)}
        {status === 'loading' && (<div>Lodaing data...</div>)}
        {status === 'success' && (<div>{data.results.map(planet => <Planet key={planet.name} planet={planet}/>)}</div>)}
    </div>);
}

export default Planets;