import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w9i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w9i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w9i4.jpg' className='responsive'></img>

</div>
  </div>


</div>
<div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>


<div className='container mt-3'>
  <li>
  Material: Stainless Steel
  </li>
  <li>
    
  </li>
  <li>
  Number Of Pieces: 1 Pc
  </li>

  <li>
  Package Includes: 1 x Chain Watch, 1 x Watch Box
  </li>
  <li>
  Dial Diameter: 36 mm
  </li>

  {/* •  Product Code: MZ146200057SRSE */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99109</h3>
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
