import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w43i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w43i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w43i4.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w43i5.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic
  </li>
  <li>
  Product Feature: Plain
  </li>
  <li>
  Color: White
  </li>

  <li>
  Length: 4.3 Inches
  </li>
  <li>
  Width: 2.6 Inches
  </li>

  <li>
  Height: 6.4 Inches
  </li>
  {/* Code: MZ59700000342ONTEGO */}




  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99143</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
