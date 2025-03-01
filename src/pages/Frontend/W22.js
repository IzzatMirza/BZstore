import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w22i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w22i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w22i4.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Product Feature: Voice Assistant
  </li>
  <li>
  Model Name: X8 (V5.1) ENC
  </li>

  <li>
  Wearing Type: In-ear ENC Gaming earbuds
  </li>
  <li>
  Charging Time: About 2 hours
  </li>

  <li>
  Battery Capacity Of Earbuds: 50mAh
  </li>
  <li>
  Standby Time: 120 hours
  </li>
  <li>
  Battery Capacity Of Charging Box: 1500mAh
  </li>

  <li>
  Microphone: Yes
  </li>

  <li>
  Bluetooth Range: 20M

  </li>

  <li>
  Color: Black
</li>


<li>
Package Includes: 1 x Earbuds, 1 x USB Cable,  1 x Charging Box

  </li>

  {/* Product Code: MZ70420029MTAS */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99122</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
