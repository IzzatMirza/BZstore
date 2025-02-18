import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop5() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s5i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s5i3.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    
     
<div className='container mt-3'>
<li>
  
Fabric: Katan Silk
</li>
<li>
Shirt: Plain
 Trouser: Plain
</li>
<li>
Dupatta: Embroidered
</li>

Cuttings: Shirt: 2.5 Gazz, Trouser: 2.5 Gazz, Dupatta: 2.5 Gazz
<li>
Khussa Size: 6, 7, 8, 9, 10
</li>
<li>

Package Includes: 1 x Shirt, 1 x Trousers, 1 x Dupatta, 1 x Khussa
</li>



{/* Product Code: MZ51300463SHZST */}

<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                  <li>
  <h3><span className='text-danger'>Product ID</span>: 99005</h3>
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
