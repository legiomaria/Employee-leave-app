import React from 'react';
import './Table.css'

const Table = ({ employees, handleEdit, handleDelete }) => {

  //  const formatter = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // minimumFractionDigits: null,
  //  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Leave Type</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneno}</td>
                <td>{employee.gender} </td>
                <td>{employee.department} </td>
                <td>{employee.leavetype} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button edit"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
