import React from 'react'
import { Link } from 'react-router-dom'

export default function shop2() {
  return (
    <>
    
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s2i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s2i2.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    <div className='mt-3' style={{ border: "1px solid black" }}></div>
    <h4 className='mt-2 d-flex justify-content-center'>Details</h4>

<div className='container mt-3'>
<li>
      Fabric: Dhanak
    </li>
<li>

  Shirt: Embroidered
</li>
<li>

  Sleeves: Embroidered
</li>
<li>


  Trouser: Plain
</li>
<li>

  Shawl: Wool
</li>
<li>

 Cuttings: Shirt: 2.5 Gazz, Trouser: 2.5 Gazz, Dupatta: 2.5 Gazz
</li>
<li>

 Season: Winters
</li>
<li>


  Package Includes: 1 x Shirt, 1 x Trousers, 1 x Dupatta
</li>
<li>

  Note: There might be 1-3 cm errors of dimension data due to pure manual measurement
</li>
<li>


  There might be slight color differences due to different light and monitor effects.
</li>
<li>

  {/* Product Code: MZ46900502SLFSH */}
</li>
<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                  <li>
  <h3><span className='text-danger'>Product ID</span>: 99002</h3>
</li>

<th>__Delivery Charges__</th>
    <li>
<span className='text-bold'>Cash Handling___<span className='text-danger'>Fee</span>___</span>
      40 </li>
      <li>
<span className='text-bold'>Post Ex___<span className='text-danger'>Rs</span>___</span>
      139"Minimum" </li>
      <li>
<span className='text-bold'>Leopards___<span className='text-danger'>Rs</span>___</span>
      210. </li>
      <li>
<span className='text-bold'>Trax_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>
      <li>
<span className='text-bold'>Tcs_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>

</div>
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
