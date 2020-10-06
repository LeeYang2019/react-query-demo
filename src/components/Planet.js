import React from 'react';
import style from 'styled-components';

const CardDiv = style.div`
    padding: 8px 16px;
    background: #1b1b1b;
    margin: 16px 0;
    border-radius: 20px;

    & > h3 {
        margin: 10px 0;
        color: #ffff57;
    }

    & > p {
        margin: 6px 0;
        color: #999;
    }
`;

const Planet = ({planet}) => {
    return (<CardDiv>
        <h3>{planet.name}</h3>
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
    </CardDiv>);
}

export default Planet;