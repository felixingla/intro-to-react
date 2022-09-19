import './App.css';
import Employee from './Employee';

function App() {
  
  return (
    <header class="App-header">
      <h1> Company Directory </h1>
      <Employee firstName = "Jack" lastName = "A." employeeAge="24" />
      <Employee firstName = "Steph" lastName = "B." employeeAge="24"/>
      <Employee firstName = "George" lastName = "C." employeeAge="24"/>
      <Employee firstName = "Felix" lastName = "D." employeeAge="24"/>
    </header>
  )
}

export default App;
