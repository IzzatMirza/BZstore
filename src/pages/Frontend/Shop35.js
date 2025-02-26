import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop35() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s35i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s35i3.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    

    
    <div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Model Number: RE - 7800
  </li>
  <li>
  Nozzle: 1 x Nozzle
  </li>

  <li>
  Color: Black, Yellow
  </li>
  <li>
  High: 3500W
  </li>

  <li>
  Heat Settings: Cold / Warm / Hot
  </li>
  <li>
  Speed Settings: High/Low

  </li>
  <li>
  Product Feature: Fast Drying, Lightweight And Ergonomic

  </li>

  <li>
  Power Source: Corded Electric
  </li>

  <li>
  Package Includes: 1 x Hair Dryer, 1 x Nozzle
  </li>
<li>
Watts: 3500 Watt
</li>

{/* Product Code: MZ65200000104TDPS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99035</h3>


</div>
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
