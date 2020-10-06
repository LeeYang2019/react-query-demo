import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import style from 'styled-components';
import {ReactQueryDevtools} from 'react-query-devtools';

const AppDiv = style.div`
  width: 960px;
  margin: 0 auto;
`;

const H1Div = style.h1`
  color: #ffff57;
  font-size: 4em;
  letter-spacing: 2px;
`;

const ContentDiv = style.div`
  text-align: left;
`;

function App() {

  const [page, setPage] = useState('planets');

  return (
    <>
    <AppDiv>
    <H1Div>StarWars Info</H1Div>
    <Navbar setPage={setPage}/>
    <ContentDiv>
      {page === 'planets' ? (<Planets/>) : (<People/>)}
    </ContentDiv>
    </AppDiv>
    <ReactQueryDevtools/>
    </>
  );
}

export default App;
