// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EmployeesList from '../components/EmployeesList';
import EmployeeDetails from '../components/EmployeeDetails';
import AddEmployee from '../components/AddEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<EmployeesList />} />
        <Route path="/employee/:empId" element={<EmployeeDetails />} />
        <Route path="/add-employee" element={<AddEmployee/>} />
      </Routes>
    </Router>
  );
}

export default App;
