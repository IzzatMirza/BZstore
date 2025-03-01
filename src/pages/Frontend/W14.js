import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w14i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w14i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<h4 className='text-center text-secondary mt-4'>Details</h4>
<div className='container ' style={{ border: "1px solid black" }}></div>


<div className='container mt-3'>
  <li>
  Material: Plastic
  </li>
  <li>
  Product Feature: Long-Lasting Battery With Fast Charge, Compatible With All Android Devices, Compatible With iPhone Devices, Water Resistant
    
  </li>
  <li>
  Color: Multicolor
  </li>

  <li>
  7 Model Number
  </li>
  <li>
  Battery Capacity: 280 mAh
  </li>

  <li>
  Standby Time: 8 Hours
  </li>
  <li>
  Weight: 400 Gram
  </li>
  <li>
  Width: 2 Inches
  </li>

  <li>
  Height: 2 Inches
  </li>

  {/* Product Code: MZ63300000015GSHE */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99114</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
