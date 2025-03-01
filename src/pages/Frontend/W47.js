import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w47i1.jpg' className='responsive'></img>
</div>
{/* 

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w47i3.jpg' className='responsive'></img>

</div> */}
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: Metal, Silicone
  </li>
  <li>
  Connectivity Tech: Wireless
  </li>
  <li>
  Product Feature: Health And Fitness Tracking, Long Battery Life, Voice Assistant, Water Resistant, Sleek And Stylish Design, In-built Microphone, Voice Control Features For Tasks Like Setting Reminders, Sending Messages, Or Controlling Smart Home Devices.
  </li>

  <li>
  Color: Black
  </li>
  <li>
  Battery Capacity: 3500 mAh
  </li>

  <li>
  Standby Time: 544 Hours
  </li>
  <li>
  Weight: 200 Gram
  </li>

  {/* Product Code: MZ1434200033TACS */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99147</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
