import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w5i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w5i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: Stainless Steel
  </li>
  <li>
  Number Of Pieces: 3 Pcs
  </li>
  <li>
  Package Includes: 1 x Analogue Watch, 2 x Watch Strap
  </li>

  {/* Product Code: MZ146200054SRSE */}
  

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99105</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
