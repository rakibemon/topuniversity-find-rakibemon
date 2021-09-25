import React from 'react';

const SelectedItemTable = (props) => {
    const totalInternationalStudents = props.cart.reduce((previous,current)=>{
        return previous+current.internationalStudent;
    },0);
    return (
        <div>
            <table className="table table-dark table-striped">
                <tbody>
                    <tr>
                        <td> University Added : {props.cart.length}</td>
                    </tr>
                    <tr className='table-active'>
                        <td> Total Internatiaonal Students : {totalInternationalStudents} </td>
                    </tr>
                </tbody>
            </table>
            <ul>
                {
                    props.cart.map(uni => <li key={uni.qsRanking}> {uni.name}</li>)
                }
            </ul>
            <div className="text-center">
                <button className="btn btn-success text-white">Confirmed</button>
            </div>
        </div>
    );
};

export default SelectedItemTable;