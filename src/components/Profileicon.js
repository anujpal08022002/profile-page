import React from 'react'
import profileicon from '../assets/profileicon.png';
import innerprofileicon from '../assets/innerprofileicon.png';
import profile from '../assets/squareprofileicon.png';
import usermanage from '../assets/usermanagement.png';
import changepassword from '../assets/changepass.png';
import signout from '../assets/log-out.png';
import DropdownItem from './DropdownItem';
import { useEffect,useState,useRef } from 'react';
import './style.css'

const Profileicon=()=> {

    const [open, setOpen] = useState(false);

    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current.contains(e.target)){
          setOpen(false);
        }
      };
  
      document.addEventListener("mousedown", handler);
  
      return() =>{
        document.removeEventListener("mousedown", handler);
      }
      
    });
  
    return (
      <div className="App">
        <div className="menu-container" ref={menuRef}>
          <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
            <img src={profileicon} alt=''></img>
          </div>
  
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`}>
            <div className="upperdiv">
              <div>
                <img className='profile-img' src={innerprofileicon} alt=''></img>
              </div>
              <div>
                <h3>Anuj Pal<br/><span>Web Developer</span></h3>
              </div>
            </div>
            <ul style={{paddingLeft:'0'}}>
              <DropdownItem img = {profile} text = {"Profile"}/>
              <DropdownItem img = {usermanage} text = {"User Management"}/>
              <DropdownItem img = {changepassword} text = {"Change Password"}/>
              <DropdownItem img = {signout} text = {"Signout"}/>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Profileicon
