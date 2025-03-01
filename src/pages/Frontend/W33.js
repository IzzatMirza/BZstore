import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w33i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w33i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w33i4.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w33i5.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Product Feature: Mini
  </li>
  <li>
  Color: White
  </li>
  <li>
  Package Includes: 1 x Power Adapter, 1 x Charging Cable
  </li>

  <li>
  65 Model Number

  </li>
  <li>
  Watts: 65 Watt
  </li>

  <li>
  Weight: 120 Gram
  </li>
  <li>
  Brand: OnePlus

  </li>
  <li>
  Input Voltage: 100-240V AC (Global compatibility)

  </li>

  <li>
  USB Ports: 1x USB Type-C (for charging)

  </li>


  {/* Product Code: MZ684200026AZASZE */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99133</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
