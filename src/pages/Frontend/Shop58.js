import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop58() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s58i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s58i3.jpg' className='responsive'></img>
    
    </div>

    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s58i4.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>


    <div className='container mt-3'>
  <li>
  Material: Metal, Silicone
  </li>
  <li>
  sage Time: About 48 hrs
  </li>
  <li>
  Button Method: Full Screen Touch
  </li>

  <li>
  Charging Port: Wireless Charging
  </li>
  <li>
  Waterproof Level: IP67
  </li>

  <li>
  Screen Display: 2.02 Inches
  </li>
  <li>
  Product Feature: Long-Lasting Battery With Fast Charge, Health And Fitness Tracking

  </li>
  <li>
  Color: Golden
  </li>

  <li>
  Battery Capacity: 270 mAh
  </li>

  <li>
  Standby Time: 72 Hours
  </li>

  {/* Product Code: MZ60320070MNSRPS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99058</h3>


</div>
    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
