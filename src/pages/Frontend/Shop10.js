import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop10() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s10i1' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s10i2.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
     
<div className='container mt-3'>
<li>
  
Material: Reixne
</li>
<li>
Product Type: Men's Sandals
</li>
<li>
Product Feature: Comfortable, Soft, Durable
</li>

Product Code: MZ76500006JTYWL

<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                
  <h3><span className='text-danger'>Product ID</span>: 99010</h3>


</div>
    
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
