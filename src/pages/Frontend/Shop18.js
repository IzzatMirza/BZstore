import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop18() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s18i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s18i3.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
    <div className='mt-3' style={{ border: "1px solid black" }}></div>
<h4 className='mt-2 d-flex justify-content-center'>Details</h4>
         
<div className='container mt-3'>
<li>
Material: ABS Plastic
</li>
<li>
Color: Multicolor

</li>
<li>
Open-Ear Design: Ambie provides a truly wireless, open-ear headphone experience, allowing you to wear them all day like an accessory while staying connected to your surroundings.
</li>

  
<li>
Bluetooth Profiles: A2DP, AVRCP, HFP, HSP
</li>
<li>
Battery System: Lithium-ion battery (Body: 35mAh per ear, Case: 270mAh)
</li>
<li>Waterproof Performance: IPX5 (Charging case not waterproof)
</li>


<li>
Communication Distance: Up to about 10m with paired smartphone (Class 2)
</li>
<li>
Communication Method: Bluetooth standard Ver5.2
</li>

{/* Product Code: MZ4420143RL */}


<li><span className='text-danger'>Return Within 7 days</span>
                  
                  </li>
                
  <h3><span className='text-danger'>Product ID</span>: 99018</h3>
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
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
