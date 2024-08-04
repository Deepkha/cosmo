// AddEmployee.js
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    "name": '',
    "Address": {
      "Line1": '',
      "city": '',
      "country": '',
      'zipcode': '',
    },
    'contact':  {
      'email': '',
      'mobile': '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
    Address: {
        ...prevEmployee.Address,
        [name]: value,
      },
    }));
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
        ...prevEmployee,
        contact: {
          ...prevEmployee.contact,
          [name]: value,
        },
      }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Employee object:', employee);

        try {
            const response = await fetch('https://free-ap-south-1.cosmocloud.io/development/api/cosmo', {
              method: 'POST',
              headers: {
                'projectId':'66a9e72e39e2fdc09bbb9f39',
                'environmentId':'66a9e72e39e2fdc09bbb9f3a'
            },
              body: JSON.stringify(employee),
            });
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            navigate("/");
             // Redirect to the listing page
          } catch (error) {
            console.error('Error adding employee:', error);
          }
  };

  return (

    <div className=" bg-black min-h-screen flex items-center justify-center">
    <div className=" bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] shadow-md rounded-lg p-8 max-w-lg w-full">
      <h1 className="text-3xl font-bold text-center mb-6">Add Employee</h1>
      <form   onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name"
            value={employee.name}
            onChange={handleInputChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Address</h2>
          <label htmlFor="Line1" className="block text-gray-700 font-medium mb-2">Address Line 1:</label>
          <input
            type="text"
            id="Line1"
            name="Line1"
            placeholder="Enter Your Address Line"
            value={employee.Address.Line1}
            onChange={handleAddressChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter Your City"
            value={employee.Address.city}
            onChange={handleAddressChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter Your Country"
            value={employee.Address.country}
            onChange={handleAddressChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">ZIP Code:</label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            placeholder="Enter Your ZIP Code"
            value={employee.Address.zipcode}
            onChange={handleAddressChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={employee.contact.email}
            onChange={handleContactChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">Mobile:</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Enter Your Mobile Number"
            value={employee.contact.mobile}
            onChange={handleContactChange}
            required
            className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          Add Employee
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddEmployee;
