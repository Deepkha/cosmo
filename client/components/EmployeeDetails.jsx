// EmployeeDetails.js
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

const EmployeeDetails = () => {
  const { empId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetchEmployeeDetails();
  }, []);

  const fetchEmployeeDetails = async () => {
    try {
      const response = await fetch(`https://free-ap-south-1.cosmocloud.io/development/api/cosmo/${empId}`,{
        headers: {
            'projectId':'66a9e72e39e2fdc09bbb9f39',
            'environmentId':'66a9e72e39e2fdc09bbb9f3a'
        }
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      setEmployee(data);
       
    } 
    catch (error) {
      console.error('Error fetching employee details:', error);
    }
  };


  if (!employee) {
    return <p>Loading...</p>;
  }
  

  return (
    
    <div className="min-h-screen bg-green-300 flex items-center justify-center py-10">
      <div className="max-w-lg mx-auto p-8 border rounded-lg shadow-2xl bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Employee Details</h1>
        <div className="mb-8">
          <p className="mb-2 text-lg text-gray-700">
            <strong className="text-gray-900">Name:</strong> {employee.name}
          </p>
          <p className="mb-2 text-lg text-gray-700">
            <strong className="text-gray-900">Employee ID:</strong> {employee._id}
          </p>
          <p className="mb-2 text-lg text-gray-700">
            <strong className="text-gray-900">Address:</strong> {employee.Address.Line1}, {employee.Address.city}, {employee.Address.country}, {employee.Address.zipcode}
          </p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Contact </h2>
        <ul className="list-disc pl-5 text-lg text-gray-700">
          <li className="mb-2">
            <strong className="text-gray-900">Email:</strong> {employee.contact.email}
          </li>
          <li>
            <strong className="text-gray-900">Mobile:</strong> {employee.contact.mobile}
          </li>
        </ul>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-teal-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-teal-600 transition duration-300 shadow-lg"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
