/* eslint-disable no-unused-vars */
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth-context'

function Navbar() {
  let {isLoggedIn} = useAuth();
  return (
    <>
      <header>
        <div className="container">
          {/* LOGO   */}
          <div className="logo-brand">
            <NavLink to="/">OwnPrep</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">SignUp</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar