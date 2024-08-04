// EmployeesList.js
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const EmployeesList = () => {
const [employees, setEmployees] = useState([]);
useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/cosmo?limit=10&offset=0',{
        headers: {
            'projectId':'66a9e72e39e2fdc09bbb9f39',
            'environmentId':'66a9e72e39e2fdc09bbb9f3a'
        }});

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const answer = await response.json();
      const employee = answer.data;
   
    const uniqueEmployees = employee.filter((emp, index, self) => 
      index === self.findIndex(e => e._id === emp._id)
    );
    setEmployees(uniqueEmployees);

    } 
    catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

 
  const deleteEmployee = async(id) => {
    try {
      const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/cosmo/${id}`,{
        method: 'DELETE',
        headers: {
                'projectId':'66a9e72e39e2fdc09bbb9f39',
                'environmentId':'66a9e72e39e2fdc09bbb9f3a'
        },
        body:JSON.stringify({}),

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setEmployees((prevEmployees) => prevEmployees.filter(emp => emp._id !== id));
      fetchEmployees();
      return response.json();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  
 
  return (

    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-indigo-300 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Employees List</h1>
      {employees.length === 0 ? (
        <p className="text-lg text-gray-600">No Employees in the system.</p>
      ) : (
        <ul className="space-y-4 w-full max-w-2xl">
          {employees.map((employee) => (
            <li
              key={employee._id.toString()}
              className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-700">
                {employee.name} - {employee._id}
              </span>
              <div className="flex space-x-3">
                <Link
                  to={`/employee/${employee._id}`}
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-200"
                >
                  Details
                </Link>
                <button
                  onClick={() => deleteEmployee(employee._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link
        to={'/add-employee'}
        className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
      >
        Add Employee
      </Link>
    </div>
);
};

   

export default EmployeesList;
