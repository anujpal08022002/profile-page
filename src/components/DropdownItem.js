import React from 'react'
import './style.css'

function DropdownItem(props){
    return(
      <li className="dropdownItem">
        <img src={props.img} alt='image'></img>
        <a href='#'> {props.text}</a>
      </li>
    );
  }

export default DropdownItem;

