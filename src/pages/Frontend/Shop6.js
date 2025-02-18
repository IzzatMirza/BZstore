import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop6() {
  return (
    <>
    
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s6i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s6i1.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>


     
<div className='container mt-3'>
<li>
  
Shirt Fabric: Lawn
</li>
<li>
Pattern: Embroidered
</li>
<li>
Shirt Front Pattern: Hand Embroidered
</li>

Dupatta Pattern: Embroidered
<li>
Number Of Pieces: 3 Pcs
</li>
<li>

Shirt Cutting: 2.5 Gazz
</li>

Trouser Cutting: 2.5 Gazz
<li>

Dupatta Cutting: 2.5 Gazz
</li>

{/* Product Code: MZ478200002SNS */}

<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                  <li>
  <h3><span className='text-danger'>Product ID</span>: 99006</h3>
</li>
  {/* Product Code: MZ47200019AMNAB */}

</div>
    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
