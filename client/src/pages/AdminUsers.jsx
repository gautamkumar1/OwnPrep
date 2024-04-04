/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth-context';
function AdminUsers() {
  const {authorizationToken} = useAuth()
  const [users,setUsers] = useState([])
  const getAllUsersData = async () =>{
    try {
      const response = await fetch("http://localhost:5000/api/admin/users",{
        method: "GET",
        headers: {
          Authorization : authorizationToken,
        },
      });
      const responseData = await response.json();
      setUsers(responseData)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllUsersData();
  }, [authorizationToken]);
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Users Data </h1>
        </div>
        <div className="container  admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                      Edit
                    </td>
                    <td>
                     Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminUsers