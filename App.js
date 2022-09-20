import './App.css';
import Employee from './Employee';

function App() {
  const employeeInfo = [
    {
      firstName: "Jack",
      lastName: "Smith",
      age: "24",
      employeeLocation: "Barcelona",
      employeeId: "1"
    },
    {
      firstName: "Steph",
      lastName: "A.",
      age: "24",
      employeeLocation: "Barcelona",
      employeeId: "2"
    },
    {
      firstName: "George",
      lastName: "B.",
      age: "24",
      employeeLocation: "Barcelona",
      employeeId: "3"
    },
    {
      firstName: "Felix",
      lastName: "Ingla",
      age: "24",
      employeeLocation: "Barcelona",
      employeeId: "4"
    }
  ];
  
  return (
    <header class="App-header">
      <h1> Company Directory </h1>
      {
        employeeInfo.map(employee => {
          
          return (
            <Employee key={employee.employeeId} {...employee} />
          )
          }
        )
      }
      {/*<Employee firstName = "Jack" lastName = "A." employeeAge="24" />
      <Employee firstName = "Steph" lastName = "B." employeeAge="24"/>
      <Employee firstName = "George" lastName = "C." employeeAge="24"/>
  <Employee firstName = "Felix" lastName = "D." employeeAge="24"/>*/}
    </header>
  )
}

export default App;
