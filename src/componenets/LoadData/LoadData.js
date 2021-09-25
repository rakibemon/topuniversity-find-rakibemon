import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import './LoadData.css'
const LoadData = () => {
    const [universities,setUniversities] = useState([]);
    useEffect(()=>{
        fetch('./university.json')
        .then(response => response.json())
        .then(data => setUniversities(data)
        )
    },[])
    return (
        <div>
            {
                universities.map(university => {
                    const {qsRanking} = university
                    return <DisplayData key={qsRanking} university={university} ></DisplayData>
                })
            }
        </div>
    );
};

export default LoadData;