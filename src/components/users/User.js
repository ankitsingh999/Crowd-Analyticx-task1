
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    const loadUser = () => {
      const usersFromStorage = JSON.parse(localStorage.getItem("users") || "[]")
      setUser(usersFromStorage[id]);    // id taken as index from the array
    };
    loadUser();
  }, [id]);

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">USER: {parseInt(id)+1}</h1>
      <hr />
      {
        user &&       <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Username: {user.age}</li>
        <li className="list-group-item">Department: {user.department}</li>
        <li className="list-group-item">Blood Group: {user.blood}</li>
        <li className="list-group-item">Address: {user.address}</li>
        <li className="list-group-item">Contact Number: {user.contact}</li>
      </ul>
      }

    </div>
  );
};

export default User;