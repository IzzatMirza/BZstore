import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop33() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s33i1.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s33i2.jpg' className='responsive'></img>
    
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
  Available Sizes: Medium, Large, X-Large
  </li>
  <li>
  Color: Beige
  </li>

  <li>
  Package Includes: 1 x Sleep Shirt, 1 x Sleep Trouser
  </li>
  <li>
  Size Chart:
•  Medium:
•  • Shirt Length: 26 Inches
•  • Shirt Chest: 19 Inches
•  Large:
•  • Shirt Length: 27 Inches
•  • Shirt Chest: 20 Inches
•  X-Large:
•  • Shirt Length: 28 Inches
•  • Shirt Chest: 22 Inches

  </li>


  {/* Product Code: MZ1204200012ALINOESGSN */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99033</h3>


</div>


    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
