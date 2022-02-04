import React from 'react';
import './Sale.css';
function sale() {
  return <div>

<h8> House For Sale</h8>


<table>
  <tr>
    <th>No</th>
    <th>Name</th>
    <th>Location</th>
    <th>Action</th>
  </tr>
  <tr>
   <td>1</td>
   <td>Familly House</td>
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
    <td>Familly House</td>
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

  </div>;
}

export default sale;

