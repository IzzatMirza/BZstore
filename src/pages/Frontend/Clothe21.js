import React from 'react'
import { Link } from 'react-router-dom'

export default function clothe21() {
  return (
    <>
    <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='c21i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='c21i3.jpg' className='responsive'></img>

</div>
  </div>


</div>

<div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>
<div className='container mt-3'>

<li>
Fabric: Lawn
  </li>
  <li>
  Pattern: Embroidered

  </li>
  <li>
  Shirt Front - Pattern: Embroidered
  </li>

  <li>
  Shirt Back: Plain
  </li>
  <li>
  Trouser - Pattern: Plain
  </li>

  <li>
  Dupatta - Fabric: Diamond Lawn
  </li>
  <li>
  Dupatta - Pattern: Digital Print
  </li>
  
  <li>
  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
  </li>
  <li>
  Shirt Cutting: 2.5 Meter

  </li>
  <li>
  Trouser Cutting: 2.5 Meter
  </li>

  <li>
  Dupatta Cutting: 2.5 Meter
  </li>

  


  {/* Product Code: MZ61900052AMFS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99221</h3>
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
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>

</>

  )
}
