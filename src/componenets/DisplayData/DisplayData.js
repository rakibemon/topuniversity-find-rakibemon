import React from 'react';
import './DisplayData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// component to display data in UI
const DisplayData = (props) => {
    const {name,img,researchOutput,qsRanking,internationalStudent,location} = props.university;
    
    return (
        <div className='single-university'>
            <figure>
                <img className='img img-thumbnail' src={img} alt={name + " Image"}/>
            </figure>
            <h5 className='text-center'>Name : {name}</h5>
            <h6>Research Output :{researchOutput}</h6>
            <p>QS Ranking : {qsRanking}</p>
            <p>International Student: {internationalStudent}</p>
            <p>Location : {location}</p>
            <button onClick={()=> props.handleAddToList(props.university)} className="btn btn-info mb-3 px-4 py-2 text-white">Add to List <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default DisplayData;