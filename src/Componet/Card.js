import React from 'react';
import Sidebar from '../Componet/Sidebar'

import Image from '../Image/imageT.JPG';
import {FaHouseUser ,FaHouseDamage } from "react-icons/fa";
import './Card.css';
function Card() {
  return<div className='cards'>
    <Sidebar/>
  <img src={Image} alt="imageT"/>
<div class="column-group1">
  <div class="row">
 
    <div class="card"> <FaHouseUser/>
    Booked</div>
  </div>
  <div class="row">
    <div class="card"> <FaHouseDamage/>Rented</div>
  </div>
  <div class="row">
    <div class="card"> <FaHouseDamage/>On Sale</div>
  </div>
  <div class="row">
    <div class="card"> <FaHouseDamage/>On Rent</div>
  </div>
  <div class="row">
    <div class="card"> <FaHouseDamage/>Bought</div>
  </div>
</div>


<div class="card-group">
  <div class="card">
    
    <div class="card-body">
      <h1 class="card-title">New House For Rent</h1>
      <div className='view'> 
      <table>
  <tr>
    <th>No</th>
    <th>House Location</th>
    <th>Route Address</th>
  </tr>
  <tr>
   <td>1</td>
   <td>Masaka</td>
   <td>kicukiro KG 234ST<a class="btn btn-primary "  href="#" role="button">View</a></td>
  </tr>
  <tr>
    <td>2</td>
    <td>Masaka</td>
  <td>kicukiro KG 234ST<a class="btn btn-primary "  href="#" role="button">View</a> </td>
  </tr>
</table>
      
      
      
</div> 
</div>
    </div> 
  <div className='viewAll'> <a class="btn btn-primary" href="#" role="button">View All</a> </div>   
    <div class="card-body">
      <h2 class="card-title">New House For Sales</h2>
      <div className='label'> 
      
      <table>
  <tr>
    <th>No</th>
    <th>House Location</th>
    <th>Route Address</th>
  </tr>
  <tr>
   <td>1</td>
   <td>Masaka</td>
   <td>kicukiro KG 234ST</td><a class="btn btn-primary" href="#" role="button">View</a><br/>
  </tr>
  <tr>
    <td>2</td>
    <td>Masaka</td>
    <td>kicukiro KG 234ST</td><a class="btn btn-primary" href="#" role="button">View</a><br/>
  </tr>
  
</table>
 
      </div>

      <div className='viewAll1'><a class="btn btn-primary" href="#" role="button">View All</a></div>
</div>
  </div>

  

    </div>
  
}

export default Card;
