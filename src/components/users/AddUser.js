import React from "react";
import { useNavigate } from "react-router-dom";


 const AddUser = () => {
    let navigate = useNavigate();

    //local state
    const [user, setUser] = React.useState({
        name:"",
        age:"",
        department:"",
        blood:"",
        address:"",
        contact:""     
    })
    
    //function to add the user and navigate to home screen after addition
    const onSubmit = async e => {
        e.preventDefault();
          const usersFromStorage = JSON.parse(localStorage.getItem("users") || "[]")
          usersFromStorage.push(user)
          try {
            localStorage.setItem("users",JSON.stringify(usersFromStorage)) ; 
          } catch (error) {
            console.log(error);
          }
          navigate("/");
      };

    return(
        <div className="container py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4 ">ADD USER</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={user.name}
                onChange={e => setUser({...user,name:e.target.value})}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Age"
                name="Age"
                value={user.age}
                onChange={e => setUser({...user,age:e.target.value})}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Department"
                name="Department"
                value={user.department}
                onChange={e => setUser({...user,department:e.target.value})}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Blood group"
                name="Blood"
                value={user.blood}
                onChange={e => setUser({...user,blood:e.target.value})}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Address"
                name="Address"
                value={user.address}
                onChange={e => setUser({...user,address:e.target.value})}
              />
            </div>
            <div className="form-group py-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="Contact"
                value={user.contact}
                onChange={e => setUser({...user,contact:e.target.value})}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
        
    );
 };

 export default AddUser;