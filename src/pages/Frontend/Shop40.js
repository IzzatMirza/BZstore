import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop40() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s40i3.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s40i2.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
        
    <div className='container mt-3'>
  <li>
  Material: Rubber, Metal
  </li>
  <li>
  Color: Multicolor
  </li>
  <li>
  Size: 2.9 Inches Screen
  </li>

  <li>
  Package Includes: 1 x Smart Watch, 4 x Straps, 1 x Wireless Charger
  </li>
  

  {/* Product Code: MZ60320057MNSRPS */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99040</h3>


</div>
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
