import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w20i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w20i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.3
  </li>
  <li>
  Product Feature: Long-Lasting Battery With Fast Charge, Advanced Noise Cancellation For Any Environment, AI Noise Cancellation

  </li>

  <li>
  Battery Capacity: 70 mAh
  </li>
  <li>
  Standby Time: 70 Hours
  </li>

  <li>
  Watts: 5 Watt
  </li>
  <li>
  Weight: 200 Gram
  </li>
  <li>
  Color: White
  </li>

  <li>
  Length: 10 Inches
  </li>

  <li>
  Length: 10 Inches
  </li>

  <li>
  Width: 10 Inches
  </li>

  <li>
  Height: 3 Inches
  </li>



  {/* •  Product Code: MZ536200015CLTS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99120</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
