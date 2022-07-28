
import './App.css';
import EmployeeList from './components/EmployeeList';
import { Routes, Route } from "react-router-dom";
import AddEmp from './components/AddEmp';
import EditEmp from './components/EditEmp';




function App() {

  return (
    <>
     
      <div className="App">
     
        <Routes>
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/add" element={<AddEmp />}></Route>
          <Route path="/edit/:id" element={<EditEmp />}></Route>
        </Routes>

      </div>
    </>
  );

}

export default App;
