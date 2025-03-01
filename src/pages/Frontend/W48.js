import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w48i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w48i3.jpg' className='responsive'></img>

</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w48i4.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: Metal, Silicone
  </li>
  <li>
  Connectivity Tech: Bluetooth  </li>
  <li>
  Product Feature: Health And Fitness Tracking, Long Battery Life, Water Resistant, Voice Control Features For Tasks, 7 In 1

  </li>

  <li>
  Color: Multicolor
  </li>
  <li>
  Package Includes: 1 x Smart Watch, 7 x Straps, 1 x Wireless Charger

  </li>

  <li>
  Standby Time: 24 Hours
  </li>
  

  {/* Product Code: MZ1518200044BGSE */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99148</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}

