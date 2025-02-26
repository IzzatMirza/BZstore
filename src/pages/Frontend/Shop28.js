import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop28() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s28i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s28i1.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    

    </div>


      
    <div className='container mt-3'>
  <li>
  Fabric: Cotton Jersey
  </li>
  <li>
  Pattern: Printed

  </li>
  <li>
  Neck Type: Round Neck
  </li>

  <li>
  Available Sizes: Medium, Large, X Large
  </li>
  <li>
  Medium: Chest 19 Length 26 
  </li>

  <li>
  Large: Chest 20 length 27
  </li>
  <li>
  X Large: Chest 22 length 28
  </li>
  <li>
  Number Of Pieces: 2 Pcs
  </li>

  <li>
  Color: White
  </li>

  <li>
  Package Includes: 1 x T-shirt, 1 x Trouser

  </li>


  {/* Product Code: MZ1046200005KASS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99028</h3>


</div>

    

        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
