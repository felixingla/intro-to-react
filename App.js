import React from 'react';
import './App.css';

const employees = [
  {
      name: "Anthony",
      id: "1"
  },
  {
    name: "Felix",
    id: "2"
  }
];

export default function App() {
  return (
      <div className="App">
      
      {employees.map((employee) => (
      <div>
        <h6> Name: {employee.name} </h6>
        <h6> Id: {employee.id} </h6> 
      </div>
      ))}
    
    </div>
  );
}
