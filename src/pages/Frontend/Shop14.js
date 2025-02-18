import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop14() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s14i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s14i2.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
     
<div className='container mt-3'>
<li>
  
Material: Rexine
</li>
<li>
Gender: Men's
</li>
<li>
Product Feature: Casual, Lightweight
</li>

Color: Black
<li>
Package Includes: 1 x Loafers
</li>

{/* Product Code: MZ78400000024JYWA */}

<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                
  <h3><span className='text-danger'>Product ID</span>: 99014</h3>


</div>

    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
