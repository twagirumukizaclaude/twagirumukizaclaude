
import React from 'react';
import './Sidebar.css';
import {FaBars } from "react-icons/fa";
 function Overview() {
  return <div className='side'>
<div className='icon'><FaBars/></div>
<div class="sidebar">

  <a class="active" href="#home">Add House</a>
  <a href="#news">Delete house</a>
  <a href="#contact">Edit House</a>
  <a href="#about">House to Rent</a>
  <a href="#about">House On Sale</a>
  <a href="#about">Booked House</a>
  <a href="#about">Rented House</a>
  <a href="#about">Sold House</a>
</div>
  </div>;
}


export default Overview