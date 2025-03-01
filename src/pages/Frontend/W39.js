import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w39i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w39i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w39i4.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Product Feature: Gaming, Plain, Printed, Texture, Embroidered, Embellished
  </li>
  <li>
  Color: Black
  </li>

  <li>
  Battery Capacity: 100 mAh
  </li>
  <li>
  Standby Time: 100 Hours
  </li>

  <li>
  Watts: 2.7 Watt
  </li>
  <li>
  Weight: 80 Gram
  </li>
  {/* Product Code: MZ684200050AZASZE */}




  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99139</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
