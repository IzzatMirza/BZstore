import React from 'react'
import { Link } from 'react-router-dom'

 

export default function Shop1() {
  return (


   <>

<div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='s1i3.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='s1i1.jpg' className='responsive'></img>

</div>
  </div>


</div>
  
  <div className='container mt-3'>
  <li>
    
    Fabric: Viscose
  </li>
  <li>
    Shirt Front: Schiffli Embroidered Viscose
  </li>
  <li>
    Shirt Back: Digital Printed Viscose
  </li>

    Sleeves: Digital Printed Viscose
  <li>
    Trouser: Dyed Viscose
  </li>
  <li>

    Dupatta: Printed Thai Silk
  </li>

    Shirt Front Cutting: 1.25 Meter
  <li>

    Shirt Back And Sleeves Cutting: 1.85
  </li>
  <li>

    Trouser Cutting 2.5 Meter
  </li>
  <li>

    Dupatta Cutting: 2.5 Meter
  </li>

  <li>

    Note: There might be 1-3 cm errors of dimension data due to pure manual measurement
  </li>

  <li>

    There might be slightly color difference due to different light and monitor effect.
  </li>
  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99001</h3>

    {/* Product Code: MZ47200019AMNAB */}

  </div>

    

<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>

  

    </>
  )
}
