import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop25() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s25i3.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s25i2.jpg' className='responsive'></img>
    
    </div>

    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s25i4.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
          
  <div className='container mt-3'>
  <li>
    
  Material: ABS Plastic
  </li>
  <li>
  Color: White
  </li>
  <li>
  Package Includes: 1 x Mini Portable Fan
  </li>

  <li>

  Personal Air Cooler & Air Humidifier - It is not only an personal air cooler, but also an air humidifier. You can use the small evaporative air cooler all year round, cooling you in hot summer and humidifying the air in dry autumn and winter. A full tank of water can continuously keep spraying for 2.5-12 hours (depending on the speed).

  </li>

  {/* Product Code: MZ1443200103LYBK */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99025</h3>


  </div>

    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
