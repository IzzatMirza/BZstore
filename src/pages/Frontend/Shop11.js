import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop11() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s11i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s11i3.jpg' className='responsive'></img>
    
    </div>

    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s11i4.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
         
<div className='container mt-3'>
<li>
  
Material: Plastic
</li>
<li>
Connectivity Tech: Bluetooth
</li>
<li>
Bluetooth Version: Bluetooth 5
</li>

<li>Product Feature: Long-Lasting Battery With Fast Charge, Durable Protection Against Water And Dust
</li>
<li>
Color: Multicolor
</li>
<li>

Package Includes: 1 x Smart Watch
</li>

  
<li>

20 Model Number
</li>
<li>

Battery Capacity: 1200 mAh
</li>
<li>

Standby Time: 12 Hours
</li>

<li>
Weight: 250 Gram
</li>

<li>
<span className='text-danger'>
Note:</span> Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.
</li>
<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                
  <h3><span className='text-danger'>Product ID</span>: 99011</h3>

  {/* Product Code: MZ63300000030GSHE */}

</div>

    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
