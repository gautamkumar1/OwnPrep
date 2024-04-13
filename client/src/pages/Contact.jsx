/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useAuth } from "../store/auth-context";


function Contact(){
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const {user} = useAuth();
  const [userData,setUserData] = useState(true)
 
  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })
    setUserData(false)
  }
  // handle fomr getFormSubmissionInfo
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ownprep.onrender.com/api/from/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contact),
        }
      );
      if(response.ok){
        const responseData = await response.json();
        alert("Message Sent Successfully")
        setContact({
          username: "",
          email: "",
          message: "",
        })
      }
      else{
        console.log("Message not delivered");
      }
    } catch (error) {
      console.log("Error in contact form submission",error);
    }

    console.log(contact);
  };

  

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/contact.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7444.58631604939!2d78.99505314264914!3d21.10087547226617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd49546f9d6a7f7%3A0x9cef38a19c14432b!2sPolice%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440016!5e0!3m2!1sen!2sin!4v1711787679210!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default Contact