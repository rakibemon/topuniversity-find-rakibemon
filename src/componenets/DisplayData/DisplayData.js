import React from 'react';
import './DisplayData.css'
const DisplayData = (props) => {
    const {name,img,researchOutput,qsRanking,internationalStudent,location} = props.university
    return (
        <div>
            <h5>Name : {name}</h5>
            <img src={img} alt=""/>
            <h6>{researchOutput}</h6>
            <p>{qsRanking}</p>
            <p>{internationalStudent}</p>
            <p>Location : {location}</p>
        </div>
    );
};

export default DisplayData;