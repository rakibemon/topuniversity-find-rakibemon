import React, { useEffect, useState } from 'react';
import AddNameOnList from '../DisplayData/AddNameOnList/AddNameOnList';
import DisplayData from '../DisplayData/DisplayData';
import SelectedItemTable from '../SelectedItemTable/SelectedItemTable';
import './LoadData.css'
const LoadData = () => {
    const [universities,setUniversities] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('./university.json')
        .then(response => response.json())
        .then(data => setUniversities(data)
        )
    },[])
    const handleAddToList = (university) =>{
        const newCart = [...cart,university]
        setCart(newCart)
    };
    return (
        <div>
            <div className="universities-container">
                <div className='university-container'>
                    {
                        universities.map(university => {
                            const {qsRanking} = university
                            return <DisplayData
                            key={qsRanking}
                            handleAddToList={handleAddToList}
                            university={university} ></DisplayData>
                        })
                    }
                </div>
                <div className="cart-container">
                    <SelectedItemTable cart={cart}></SelectedItemTable>
                </div>
            </div>
        </div>
    );
};

export default LoadData;