import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop37() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s37i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s37i3.jpg' className='responsive'></img>
    
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
  Bluetooth Version: Bluetooth 5.3
  </li>

  <li>
  Product Feature: Active Noise Cancellation, Designed For All-Day Comfort, Seamless Connectivity Across Devices
  </li>
  <li>
  Color: Black

  </li>

  <li>
  Package Includes: 1 x Earbuds, 1 x Charging Case, 1 x Manual
  </li>
  <li>
  Model Number: 2 nd Gen
  </li>
  
  {/* Product Code: MZ1400200014OEOT */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99037</h3>


</div>
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
