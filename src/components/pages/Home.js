import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUser = () => {
    const usersFromStorage = JSON.parse(localStorage.getItem("users") || "[]")
    setUsers(usersFromStorage) ; 
  }

  useEffect(() => {
    loadUser(); 
  }, []);

  return (
    
    <div className="container">
      <div className="py-4">
        <h1>Employee Management System</h1>
        <table className="table border shadow"  style={{backgroundColor:"white"}}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>                                            
              <th scope="col">Department</th>                                     
              <th scope="col">Blood Group</th>                                    
              <th scope="col">Address</th>
              <th scope="col">Contact Number</th>
              
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.department}</td>
                <td>{user.blood}</td>
                <td>{user.address}</td>
                <td>{user.contact}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/users/${index}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/users/edit/${index}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={ () => {
                      users.splice(index,1)
                      setUsers(users) ;
                      loadUser();  
                      localStorage.setItem("users",JSON.stringify(users))
                    } }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   
  );
};

export default Home;