import React from 'react';
import {ButtonStyle} from './utilities/Utilities';

const Navbar = ({setPage}) => {
    return <nav>
        <ButtonStyle onClick={() => setPage('planets')}>Planets</ButtonStyle>
        <ButtonStyle onClick={() => setPage('people')}>People</ButtonStyle>
    </nav>
}

export default Navbar;