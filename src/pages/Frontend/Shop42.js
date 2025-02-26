import React from 'react'
import { Link } from 'react-router-dom'

export default function Shop42() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s42i1.jpg' className='responsive'></img>
    </div>
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s42i3.jpg' className='responsive'></img>
    
    </div>


    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s42i4.jpg' className='responsive'></img>
    
    </div>
    
    



      </div>
    
    
    </div>
    
    

    <div className='container mt-3'>
  <li>
  Material: Aluminium
  </li>
  <li>
  Connectivity Tech: Bluetooth
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.1
  </li>

  <li>
  Product Feature: Heart Rate Monitoring, Gps, Notifications, Nfc For Payments, And Customizable Watch Faces, Health And Fitness Tracking, Durable Protection Against Water And Dust, Voice Control Features For Tasks Like Setting Reminders, Sending Messages, Or Controlling Smart Home Devices., Heart Rate Monitoring

  </li>
  <li>
  Color: Golden
  </li>

  <li>
  Package Includes: 1 x Smart Watch, 1 x Charger, 1 x Manual
  </li>
  <li>
  09 Model Number
  </li>
  <li>
  Battery Capacity: 450 mAh
  </li>

  <li>
  Standby Time: 92 Hours
  </li>

  <li>
  Voltage: 5 Volts
  </li>



  {/* Product Code: MZ536200048CLTS */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99042</h3>


</div>    
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
