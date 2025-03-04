import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop43() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s43i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s43i1.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    <div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>
        
    <div className='container mt-3'>
  <li>
  Fabric: Polyester
  </li>
  <li>
  Available Sizes: S, M, L, XL, 2XL, 3XL
  </li>
  <li>
    Shirt Dimensions:

  </li>

  <li>
  Small: Chest: 34-36 Inches, Waist: 26-28 Inches, Neck: 14-3/4 Inches

  </li>
  <li>
  Medium: Chest: 38-40 Inches, Waist: 30-32 Inches, Neck: 15-3/4 Inches

  </li>

  <li>
  Large: Chest: 42-44 Inches, Waist: 34-36 Inches, Neck: 15-3/4 Inches
  </li>
  <li>
  X Large: Chest: 46-48 Inches, Waist: 38-40 Inches, Neck: 16-3/4 Inches
  </li>
  <li>
  2X Large: Chest: 50-52 Inches, Waist: 42-44 Inches, Neck: 16-3/4 Inches
  </li>

  <li>
  3X Large: Chest: 52-54 Inches, Waist: 46-48 Inches, Neck: 17-3/4 Inches
  </li>

  {/* Product Code: MZ33200168EXPGL */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99043</h3>
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
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
