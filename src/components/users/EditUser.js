import React, {useState , useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


 const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams();                     // id from the url using react-router-dom

    const [user, setUser] = useState({
        name:"",
        age:"",
        department:"",
        blood:"",
        address:"",
        contact:""
    });


    //useEffect for componentdidmount this will perform inner code page render one time
    useEffect (() =>{
      const loadUser = () => {
        const usersFromStorage = JSON.parse(localStorage.getItem("users"))
        setUser(usersFromStorage[id]) ; 
      }
        loadUser();
    }, [id]);

      //edit user function
      const editUser = () => {
        const usersFromStorage = JSON.parse(localStorage.getItem("users"))
        usersFromStorage[id] = user ; 
        localStorage.setItem("users",JSON.stringify(usersFromStorage)) ; 
        navigate("/")
      }

    return(
        <div className="container py-4">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4 ">EDIT USER</h2>
          <form>
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
            <button onClick={editUser} className="btn btn-primary btn-block">Save</button>
          </form>
        </div>
      </div>
        
    );
 };

 export default EditUser;