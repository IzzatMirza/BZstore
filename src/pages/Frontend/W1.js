import React from 'react'
import { Link } from 'react-router-dom'

export default function W1() {
  return (
    <>
    <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w1i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w1i3.jpg' className='responsive'></img>

</div>
  </div>


</div>


<div className='container mt-3'>
  <li>
  Material: Stainless Steel

  </li>
  <li>
  Gender: Men's

  </li>
  <li>
  Watch Case Shape: Square
  </li>

  <li>
  Strap Material: Stainless Steel, Movement: Quartz, Water Resistant
  </li>
  <li>
  Display Format: 24-Hour Format
  </li>

  <li>
  eight: 280 Gram
  </li>

  {/* Product Code: MZ80520068SSCE */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 990101</h3>


</div>





<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


                                          <div className='container mt-3'>
  <li>
    
  </li>
  <li>
    
  </li>
  <li>

  </li>

  <li>

  </li>
  <li>

  </li>

  <li>

  </li>
  <li>

  </li>
  <li>

  </li>

  <li>

  </li>

  <li>

  </li>


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 990101</h3>


</div>


    </>
  )
}
