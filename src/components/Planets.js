import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';
import {ButtonStyle} from './utilities/Utilities';

const fetchPlanets = async (key, page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}

const Planets = () => {
    const [page, setPage] = useState(1);
    const {resolvedData, latestData, status} = usePaginatedQuery(['planets', page], fetchPlanets);

    return (<div>
        <h2>Planets</h2>

        {status === 'error' && (<div>Error fetching data</div>)}
        {status === 'loading' && (<div>Lodaing data...</div>)}
        {status === 'success' && (<>
            {/* get the max value between a pos and a neg so we cannot never get into neg */}
            <ButtonStyle onClick={() => setPage(old => Math.max(old - 1, 1))} disabled={page === 1}>Previous Page</ButtonStyle>
            <span>{ page }</span>
            {/* check if latestData or latestData.next exists and get it otherwise stay where we are */}
            <ButtonStyle 
                onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))} 
                disabled={!latestData || !latestData.next}>
                Next Page
            </ButtonStyle>
            <div>{resolvedData.results.map(planet => <Planet key={planet.name} planet={planet}/>)}</div></>)}
    </div>);
}

export default Planets;