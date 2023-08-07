import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Add.css'
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Add = ({ employees, setEmployees, setIsAdding, getEmployees }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [department, setDepartment] = useState('')
  const [leavetype, setLeaveType] = useState('')

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneno || !gender || !department || !leavetype) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      firstName,
      lastName,
      email,
      phoneno,
      department,
      gender,
      leavetype
    };

    employees.push(newEmployee);

    try{
      await addDoc(collection(db, "employees"), {
        ...newEmployee
      });
    } catch (error) {
      console.log(error)
    }

    setEmployees(employees);
    setIsAdding(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Employee data has been Added.',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1 className='add'>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="phoneno">Phone No ($)</label>
        <input
          id="phoneno"
          type="number"
          name="phoneno"
          value={phoneno}
          onChange={e => setPhoneNo(e.target.value)}
        />
        <label htmlFor="gender">Gender</label>
        <input
          id="gender"
          type="text"
          name="gender"
          value={gender}
          onChange={e => setGender(e.target.value)}
        />
         <label htmlFor="department">Department</label>
        <input
          id="department"
          type="text"
          name="department"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
         <label htmlFor="leavetype">Leave Type</label>
        <input
          id="leavetype"
          type="text"
          name="leavetype"
          value={leavetype}
          onChange={e => setLeaveType(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
