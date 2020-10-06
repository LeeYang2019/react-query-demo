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

const Person = ({person}) => {
return (<CardDiv>
    <h3>{person.name}</h3>
    <p>Gender - {person.gender}</p>
    <p>Birth-year - {person.birth_year}</p>
</CardDiv>)
}

export default Person;