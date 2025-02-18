import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop3() {
  return (
    <>
    
    <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='s3i1.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='s3i2.jpg' className='responsive'></img>

</div>
  </div>


</div>
 
<div className='container mt-3'>
<li>
Material: Rubber
  
</li>
<li>
Pattern: Plain
</li>
<li>
Gender: Women's
</li>

Product Feature: Lightweight
<li>
Available Sizes: 6, 7, 8, 9, 10, 11
</li>
<li>

Size Chart: Size Chart Attached
</li>

Color: Black
<li>

Package Includes: 1 x Shoes Pair
</li>
<li>

Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
</li>
<li>

  Dupatta Cutting: 2.5 Meter
</li>

<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                  <li>
  <h3><span className='text-danger'>Product ID</span>: 99003</h3>
</li>
  {/* Product Code: MZ47200019AMNAB */}

</div>

    

    

<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn  mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                  
                                          </button>  
                                          </div>    
    </>
  )
}
