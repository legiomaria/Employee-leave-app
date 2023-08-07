import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing, getEmployees }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [phoneNo, setPhoneNo] = useState(selectedEmployee.phoneNo);
  const [department, setDepartment] = useState(selectedEmployee.department);
  const [gender, setGender] = useState(selectedEmployee.gender);
  const [leavetype, setLeaveType] = useState(selectedEmployee.leavetype);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNo || !gender || !department || !leavetype) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      phoneNo,
      gender,
      department,
      leavetype
    };

    // TODO: Update document
    await setDoc(doc(db, "employees", id), {
      ...employee
    });

    setEmployees(employees);
    setIsEditing(false);
    getEmployees()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
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
        <label htmlFor="phoneno">Phone No</label>
        <input
          id="phoneno"
          type="number"
          name="phoneno"
          value={phoneNo}
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
