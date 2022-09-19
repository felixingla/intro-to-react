import React from 'react';

/*
const Employee = ({ firstName, lastName, employeeAge }) => {

    return (
        <h2> Employee name → {firstName} {lastName}, Age → {employeeAge} </h2>
    )
}
*/

const Employee = (props) => {
    const { firstName, lastName, employeeAge } = props;
    return (
        <h2> Employee name → {firstName} {lastName}, Age → {employeeAge} </h2>
    )
}


export default Employee;