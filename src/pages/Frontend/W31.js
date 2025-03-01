import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w31i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w31i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Connectivity Tech: USB
  </li>
  <li>
  Charging Ports: 1 USB C
  </li>

  <li>
  Compatible Devices: For Watch
  </li>
  <li>
  Product Feature: Fast Charging
  </li>

  <li>
  Color: White
  </li>
  <li>
  Battery Capacity: 1000 mAh
  </li>
  <li>
  Standby Time: 200 Hours
  </li>

  <li>
  Weight: 13 Gram
  </li>

  {/* Product Code: MZ684200020AZASZE */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99131</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
