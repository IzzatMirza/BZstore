import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w28i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w28i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Model: AirPods Pro 
  </li>
  <li>
  Fit Design: In-Ear Only
  </li>
  <li>
  Features: Built-In Microphone, Rechargeable

  </li>

  <li>
  Color: White
  </li>
  <li>
  Automatically on, Automatically connected
  </li>

  <li>
  Easy setup
  </li>
  <li>
  Quick access to Siri by saying Hey Siri
  </li>
  <li>
  Double-tap to play or skip forward
  </li>

  <li>
  Charges quickly in the case
  </li>

  <li>
  24 Hour Battery Life
  </li>


  <li>

  Rich, high-quality audio and voice
  </li>



  {/* Product Code: MZ57800038GALAXY */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99128</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}

