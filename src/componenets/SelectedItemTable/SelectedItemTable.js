import React from 'react';

// which university you selected that will update in this section
const SelectedItemTable = (props) => {

    // make unique data to ensure you can't add samne varsity multiple time
    let uniqueUniversityNameList = [];
    let totalInternationalStudents = [];
    props.cart.map(university => {
        if (uniqueUniversityNameList.indexOf(university.name) === -1) {
            uniqueUniversityNameList.push(university.name)
            totalInternationalStudents.push(university.internationalStudent)
        }
        return uniqueUniversityNameList;
    });
    return (
        <div>
            <table className="table table-dark table-striped">
                <tbody>
                    <tr>
                        <td> University Added : {uniqueUniversityNameList.length}</td>
                    </tr>
                    <tr className='table-active'>
                        <td> Total Internatiaonal Students :
                            {
                                totalInternationalStudents.reduce((previous, current) => {
                                    return previous + current
                                }, 0)
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul>
                {
                    uniqueUniversityNameList.map(universityName => <li key={universityName}> {universityName} </li>)
                }
            </ul>

            <div className="text-center">
                <button className="btn btn-success text-white">Confirmed</button>
            </div>
        </div>
    );
};

export default SelectedItemTable;