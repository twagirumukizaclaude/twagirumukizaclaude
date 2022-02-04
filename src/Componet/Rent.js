import React from 'react';
import Sidebar from '../Componet/Sidebar'
import './Rent.css';
function Rent() {
  return <div>

<Sidebar/>
<h9> House For Rent</h9>
<div className='View__edit'>
<table>
  <tr>
    <th>No</th>
    <th>Name</th>
    <th>Location</th>
    <th>Action</th>
  </tr>
  <tr>
   <td>1</td>
   <td>Masaka</td>
   <td>kicukiro KG 234ST</td>
   <td>
   <div> <button type="button" class="btn btn-primary  btn-space">View</button>
   <button type="button" class="btn btn-warning btn btn-outline-danger btn-space">Edit</button>
   <button type="button" class="btn btn-success btn-space">Delete</button>
   </div>
       </td>
  </tr>
  <tr>
    <td>2</td>
    <td>Masaka</td>
  <td>kicukiro KG 234ST </td>
  <td>
  <div className='views__edit'>
  <button type="button" class="btn btn-primary btn-space">View</button>
   <button type="button" class="btn btn-warning btn-space">Edit</button>
   <button type="button" class="btn btn-success btn-space">Delete</button>
   </div>
       </td>
  </tr>
</table>
</div>
  </div>;
}

export default Rent;
