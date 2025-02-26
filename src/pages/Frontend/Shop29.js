import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop29() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s29i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s2912.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>


    <div className='container mt-3'>
  <li>
  Shirt Fabric: Cotton Jersey
  </li>
  <li>
  Pattern: Printed

  </li>
  <li>
  Neck Type: Round Neck
  </li>

  <li>
  Available Sizes: Standard Size
  </li>
  <li>
  Package Includes: 500 x Sleep Shirt, 500 x Sleep Trouser
  </li>

  <li>
  Shirt Length: 27 Inches
  </li>
  <li>
  Shirt Chest: 23 Inches
  </li>
  <li>
  Shirt Shoulder: 19 Inches
  </li>

  <li>
  Arm Length: 21 Inches
  </li>

  <li>
  Trouser Length: 38 Inches
  </li>
<li>
Trouser Waist: 34 Inches

</li>
<li>
Trouser Hip: 19 Inches  
</li>
<li>
Color: Off White
</li>


{/* Product Code: MZ1425200054HHADHHCN */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99029</h3>


</div>
    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
