import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w25i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w25i3.jpg' className='responsive'></img>

</div>
  </div>


</div>

<div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>

<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Color: Black, Brown, White
  </li>
  <li>
  2.1 Model Number
  </li>

  <li>
  Battery Capacity: 3 mAh
  </li>
  <li>
  Standby Time: 2 Hours
  </li>

  <li>
  Watts: 4 Watt
  </li>
  <li>
  Weight: 10 Gram
  </li>
  <li>
  Super Bass - Long Battery - High Quality..

  </li>

  <li>
  Supports all Blue-tooth Mobiles and Devices Such as Laptop - Mac - Tablets etc
  </li>

  <li>
  Support voice report number automatically.

  </li>
  
  <li>
  Support voice reminding function.
  </li>
  
  <li>
  With power consumption display function for sumsung

  </li>
  
  <li>
  Support song switching.
  </li>
  
  {/* •  Product Code: MZ1548200013AASPML */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99125</h3>
    <th>__Delivery Charges__</th>
    <li>
<span className='text-bold'>Cash Handling___<span className='text-danger'>Fee</span>___</span>
      40 </li>
      <li>
<span className='text-bold'>Post Ex___<span className='text-danger'>Rs</span>___</span>
      139"Minimum" </li>
      <li>
<span className='text-bold'>Leopards___<span className='text-danger'>Rs</span>___</span>
      210. </li>
      <li>
<span className='text-bold'>Trax_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>
      <li>
<span className='text-bold'>Tcs_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>

</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
