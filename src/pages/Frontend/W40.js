import React from 'react'
import { Link } from 'react-router-dom'

export default function W2() {
  return (
    <>
     <div className='container '>
  <div className='row'>
<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w40i2.jpg' className='responsive'></img>
</div>


<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w40i3.jpg' className='responsive'></img>

</div>

<div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
<img src='w40i4.jpg' className='responsive'></img>

</div>
  </div>


</div>



<div className='container mt-3'>
  <li>
  Material: ABS Plastic    
  </li>
  <li>
  Color: Black
  </li>
  <li>
  Battery Capacity: 100 mAh
  </li>

  <li>
  Standby Time: 100 Hours
  </li>
  <li>
  Weight: 80 Gram
  </li>

  <li>
  Cooling Technology:
•  Active Cooling: Includes built-in fans or heat pipes to actively dissipate heat.
•  Passive Cooling: Uses materials like aluminum or copper to passively transfer heat away from the device.

  </li>
  <li>
  Fan Speed:
•  RPM (Revolutions Per Minute): Ranges from 2,000 to 6,000 RPM depending on the model.
•  Adjustable fan speed for custom cooling performance.

  </li>
  <li>
  Size and Compatibility:
•  Dimensions: Usually compact, around 2–3 inches in width and height.
•  Compatibility: Fits most mobile phones with an adjustable clip or magnetic mount. Some are designed specifically for certain phone models.
  </li>


  {/* Product Code: MZ684200047AZASZE */}


  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99140</h3>


</div>



<div className='d-flex justify-content-center'>
       <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                              <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                  
                                          </button>  
                                          </div>


    </>
  )
}
