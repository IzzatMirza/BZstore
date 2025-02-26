import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop44() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s44i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s44i2.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
    
    <div className='container mt-3'>
  <li>
  Gender: Men's
  </li>
  <li>
  Fabric: Micro Interlock
  </li>
  <li>
  Neck Type: Round Neck
  </li>

  <li>
  Sizes: Medium, Large, X-Large
  </li>
  <li>
  Color: Grey
  </li>

  <li>
  100% New & Good Quality
  </li>
  <li>
  Premium Quality
  </li>
  <li>
  Ready to Wear
  </li>

  <li>
  Easily Washable
  </li>

  <li>
  100% Polyster
  </li>


  {/* Product Code: MZ1564200027TEFCCSADHY */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99044</h3>


</div>    
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
