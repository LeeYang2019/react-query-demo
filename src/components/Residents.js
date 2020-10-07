import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchResident = async (resident) => {
    console.log(resident);
    const res = await fetch(resident);
    return res.json();
}

const Residents = ({resident}) => {
    const {data, status} = useQuery(resident, fetchResident)
    console.log(data);
    return (<Person person={data}/>)
}

export default Residents;