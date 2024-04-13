/* eslint-disable no-unused-vars */
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../store/auth-context";
import { toast } from "react-toastify";
function Register() {
  // Hooks for register
  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  })
  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();
  // create a function that will handle the input
  const handelInput = (e) =>{
    let name = e.target.name
    let value = e.target.value;
    setUser({...user, [name]:value})
  }
  // create a function that will handle the submit
  const handelSubmit = async (e) =>{
    e.preventDefault();
    // console.log(user)
    try {
      const response = await fetch(
        "https://ownprep.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user),
        }
      );
      const responseData = await response.json();
      // console.log("responseData", responseData);
      if(response.ok){
        toast.success("Registration successfully");
        /* / / / / / 1st Way     / / / / / */

        // store jwt token in localStorage
        // this is one way to store jwt token in localStorage
        // localStorage.setItem("token", responseData.token)

        // this is another way to store jwt token in localStorage using the context api

        /* / / / / / 2nd Way     / / / / / */
        storeTokenInLocalStorage(responseData.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/");
      }
      else{
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              {/* Left side div for image */}
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="Register Image"
                  width="500"
                  height="500"
                />
              </div>
              {/* Lets Takle Registration from */}
              <div className="registration-from">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handelSubmit} className="section-form">
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handelInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handelInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handelInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handelInput}
                    />
                  </div>
                  {/* Submit Button */}
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Register;
