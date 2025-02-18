import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop24() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s24i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s24i3.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
          
  <div className='container mt-3'>
  <li>
    
  Material: Rexine
  </li>
  <li>
  Pattern: Rhinestone
  </li>
  <li>
  Gender: Women's
  </li>

  <li>
  Product Feature: Casual, Formal, Fancy, Semi-Formal
  </li>
  <li>
  Available Sizes: 36, 37, 38, 39, 40, 41
  </li>

  <li>
  Color: Black
  </li>
  <li>
  Package Includes: 1 x Flats
  </li>


  {/* Product Code: MZ765200001ONFT */}

    <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99024</h3>


  </div>

    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
