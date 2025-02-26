import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop39() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s39i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s39i1.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
        
    <div className='container mt-3'>
  <li>
  Material: Plastic
  </li>
  <li>
  Connectivity Tech: Wireless
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.3
  </li>

  <li>
  Product Feature: 7 In 1
  </li>
  <li>
  Color: Black
  </li>

  <li>
  Package Includes: 101 x Smart Watch
  </li>
  <li>
  11001202025500 Model Number
  </li>
  <li>
  Battery Capacity: 2500 mAh
  </li>

  <li>
  Standby Time: 299 Hours
  </li>

  <li>
  Watts: 2 Watt
  </li>


  {/* Product Code: MZ1364200004KATH */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99039</h3>


</div>
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
