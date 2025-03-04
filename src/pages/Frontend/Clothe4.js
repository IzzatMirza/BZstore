import React from 'react'
import { Link } from 'react-router-dom'

export default function Clothe4() {
  return (
    <>
    <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='c4i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='c4i1.jpg' className='responsive'></img>

</div>
  </div>


</div>
<div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>

<div className='container mt-3'>

<li>
Shirt Fabric: Cotton Lawn
  </li>
  <li>
  Pattern: Hand Embroidered
  </li>
  <li>
  Shirt Front Pattern: Chikankari Embroidered

  </li>

  <li>
  Neckline: Embroidered

  </li>
  <li>
  Sleeves Pattern: Chikankari Embroidered

  </li>

  <li>
  Trouser Fabric: Cotton Lawn
  </li>
  <li>
  Trouser Pattern: Plain
  </li>
  <li>
  Dupatta Fabric: Chiffon
  </li>

  <li>
  Dupatta Pattern: Embroidered
  </li>

  <li>
  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
  </li>

  <li>
  Shirt Cutting: 3 Meter
  </li>

  <li>
  Trouser Cutting: 2.5 Meter

  </li>


  <li>
  Dupatta Cutting: 2.5 Meter
  </li>


  <li>
  Color: Maroon
  </li>


  {/* Product Code: MZ66900000576HS */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99204</h3>

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
