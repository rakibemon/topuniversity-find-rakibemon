import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from '../DisplayData/SearchOption/LocalStorage';
import SelectedItemTable from '../SelectedItemTable/SelectedItemTable';
import './LoadData.css'

//Data loaded by fetch 
const LoadData = () => {
    const [universities,setUniversities] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./university.json')
        .then(response => response.json())
        .then(data => {
            setUniversities(data)
        }
        )
    },[]);
    useEffect(()=>{
        const savedCart = getStoredCart ();
        const storedCart = []
        if(universities.length > 0){
        for (const name in savedCart){
            const addedUniversity = universities.find(university => university.name === name)
            storedCart.push(addedUniversity)
        }
        }
        setCart(storedCart)
    },[universities]);
    //click on addToList Button handler 
    const handleAddToList = (university) =>{
        const newCart = [...cart,university]
        setCart(newCart)
        addToLocalStorage(university.name)
    };
    const handleRemoveFromList = (university) =>{
        removeFromLocalStorage(university.name)
    }
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
                            handleRemoveFromList={handleRemoveFromList}
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