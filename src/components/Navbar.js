import React from 'react';
import style from 'styled-components';

const ButtonStyle = style.button`
    margin: 0 10px;
    background: transparent;
    border: 3px solid #ccc;
    border-radius: 20px;
    padding: 10px;
    color: #ccc;
    font-size: 1.2em;
    cursor: pointer;

    &:hover {
        color: #fff;
        border:color: #fff;
    }
`;

const Navbar = ({setPage}) => {
    return <nav>
        <ButtonStyle onClick={() => setPage('planets')}>Planets</ButtonStyle>
        <ButtonStyle onClick={() => setPage('people')}>People</ButtonStyle>
    </nav>
}

export default Navbar;