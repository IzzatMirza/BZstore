import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w13i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w13i3.jpg' className='responsive'></img>

</div>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w13i4.jpg' className='responsive'></img>

</div>
  </div>


</div>

<div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>

<div className='container mt-3'>
  <li>
  Material: Metal, Silicone
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.3

  </li>
  <li>
  Product Feature: Health And Fitness Tracking, Long Battery Life, Seamless Connectivity Across Devices, Voice Assistant, Sleek And Stylish Design, Compatible With All Android Devices, Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Voice Control Features For Tasks Like Setting Reminders, Sending Messages, Or Controlling Smart Home Devices.

  </li>

  <li>
  Color: Orange
  </li>
  <li>
  22 Model Number
  </li>

  <li>
  Battery Capacity: 220 mAh
  </li>
  <li>
  Standby Time: 100 Hours
  </li>
  <li>
  Watts: .081 Watt
  </li>

  <li>
  Weight: 50 Gram
  </li>

  <li>
  Length: 4.7 Cm
  </li>

  <li>
  Width: 4.0 Cm
  </li>
  <li>
  Height: 4.7 Cm
  </li>
  <li>
  Smart Features:
•  Bluetooth Calling: Make and receive calls directly from the watch
•  Notifications: Receive call, message, and app notifications
•  Remote Camera Control: Control your smartphone's camera remotely via the watch
•  Weather Forecast: Get weather updates on the watch screen
  </li>

  <li>
  Design & Build:
•  Shape: Square face with rounded corners
•  Dial Size: Approx. 45-47mm (Height), 38-40mm (Width), 10-12mm (Thickness)
•  Strap Size: Adjustable, suitable for most wrist sizes
•  Water Resistance: IP68 (can withstand sweat, rain, and splashes but not submersion)

  </li>

  {/* Product Code: MZ684200041AZASZE */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99113</h3>
    <th>__Delivery Charges__</th>
    <li>
<span className='text-bold'>Cash Handling___<span className='text-danger'>Fee</span>___</span>
      40 </li>
      <li>
<span className='text-bold'>Post Ex___<span className='text-danger'>Rs</span>___</span>
      139"Minimum" </li>
      <li>
<span className='text-bold'>Leopards___<span className='text-danger'>Rs</span>___</span>
      210. </li>
      <li>
<span className='text-bold'>Trax_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>
      <li>
<span className='text-bold'>Tcs_____<span className='text-danger'>Rs</span>_____</span>
      210. </li>

</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
