import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./components/pages/Home";
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from './components/users/User';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Contact' element={<Contact/>}/>
        <Route exact path='/users/add' element ={<AddUser/>}/>
        <Route exact path='/users/edit/:id' element ={<EditUser/>}/>
        <Route exact path='/users/:id' element={<User/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
