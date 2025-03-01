import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w34i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w34i3.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: Plastic
  </li>
  <li>
  Product Feature: Durable Protection Against Water And Dust, Connect To Multiple Devices Simultaneously, Designed For All-Day Comfort, Dust, Water & Sweat Proof, Water Resistant, Clear Voice, Super Bass, In-built Microphone, Sleek And Stylish Design, Compatible With All Android Devices
  </li>
  <li>
  Color: White
  </li>

  <li>
  Battery Capacity: 100 mAh
  </li>
  <li>
  Standby Time: 100 Hours
  </li>

  <li>
  Watts: 5 Watt
  </li>
  <li>
  Weight: 20 Gram
  </li>
  <li>
  Length: 50 Inches
  </li>

  <li>
  Connectivity:
•  3.5mm USB-C 
•  2. Cable Length:
•  1.0m – 1.5m (3.3 – 5 feet)
•  3. Speaker Drivers:
•  10mm – 14mm dynamic drivers
•  4. Impedance:
•  16? – 32?

  </li>

  {/* Product Code: MZ684200061AZASZE */}



  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99134</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
