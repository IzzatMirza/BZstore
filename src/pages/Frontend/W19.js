import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w19i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w19i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w19i4.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: Silicone
  </li>
  <li>
  Product Feature: Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Notifications, 7 In 1

  </li>
  <li>
  Color: Multicolor

  </li>

  <li>
  Package Includes: 1 x Smart Watch, 1 x Charger, 6 x Smart Wristband

  </li>


  {/* Product Code: MZ53600024CLTS */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99119</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
