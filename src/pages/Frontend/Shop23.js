import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop23() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s23i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s23i3.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    <div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>
          
  <div className='container mt-3'>
  <li>
  Material: Plastic    
  </li>
  <li>
  Connectivity Tech: Bluetooth
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.1
  </li>

  <li>
  Product Feature: Seamless Connectivity Across Devices, Designed For All-Day Comfort, High-Quality Sound With Deep Bass

  </li>
  <li>
  Color: Black, White, Blue
  </li>

  <li>
  Model Number: 16 TGT-A
  </li>
  <li>
  Battery Capacity: 30 mAh
  </li>
  <li>
  Standby Time: 2 days
  </li>

  <li>
  Voltage: 240 V
  </li>

  {/* Product Code: MZ1316200017TEGTTE */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99023</h3>
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
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
