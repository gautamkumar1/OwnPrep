/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from '../../store/auth-context';

function AdminLayout(){
  const {user, isLoading } = useAuth();
   if (isLoading) {
     return <h1>Loading ...</h1>;
   }

   if (!user.isAdmin) {
     return <Navigate to="/" />;
   }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/service">
                  {" "}
                  <FaRegListAlt />
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Nested Routes work krne ke liye outlet likhna important hai tab hi wo work karega */}
      <Outlet />
    </>
  );
}

export default AdminLayout