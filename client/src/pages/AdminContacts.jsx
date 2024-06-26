/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth-context";
import { toast } from "react-toastify";

function AdminContacts(){
  const [contactData, setContactData] = useState([]);
  const { authorizationToken} = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(
        `https://ownprep.onrender.com/api/admin/contacts`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const data = await response.json();
      console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // defining the funciton deleteContactById

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `https://ownprep.onrender.com/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Contact Data </h1>
        </div>
        <div className="container  admin-users">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Message</th>
                
              </tr>
            </thead>
            <tbody>
              {contactData.map((curContactData, index) => {
                const { username, email, message, _id } = curContactData;
                  return (
                    <tr key={index}>
                      <td>{username}</td>
                      <td>{email}</td>
                      <td>{message}</td>

                      <td>
                        <button
                          className="btn"
                          onClick={() => deleteContactById(_id)}
                        >
                          delete
                        </button>
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

export default AdminContacts