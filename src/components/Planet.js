import React from 'react';
import {CardDiv} from './utilities/Utilities';

const Planet = ({planet}) => {
    return (<CardDiv>
        <h3>{planet.name}</h3>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
    </CardDiv>);
}

export default Planet;