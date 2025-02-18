import React from 'react'
import { Link } from 'react-router-dom'


export default function Shop22() {
  return (
    <>
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s22i2.jpg' className='responsive'></img>
    </div>
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s22i3.jpg' className='responsive'></img>
    
    </div>
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s22i4.jpg' className='responsive'></img>
    
    </div>
    
      </div>
    
    
    </div>


      
  <div className='container mt-3'>
  <li>
    
  Material: Plastic
  </li>
  <li>
  Bluetooth Version: Bluetooth 5.3
  </li>
  <li>
  Product Feature: Long-Lasting Battery With Fast Charge, Advanced Noise Cancellation For Any Environment, Designed For All-Day Comfort, Voice Assistant, Smart Touch, Power On/Off, Answer, Redial, Hang Up, Play, Pause, Next Track, Long Battery Life

  </li>

  <li>
  Color: White
  </li>
  <li>
  199999999900 Model Number
  </li>

  <li>
  Battery Capacity: 2090 mAh
  </li>
  <li>
  Standby Time: 189 Hours
  </li>
  <li>
  Watts: 120 Watt
  </li>

  {/* Product Code: MZ1364200013KATH */}

  <li><span className='text-danger'>Return Within 7 days</span>
                    
                    </li>
                  
    <h3><span className='text-danger'>Product ID</span>: 99022</h3>


  </div>

    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-secondary mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Buy Now</Link>
                      
                                              </button>  
                                              </div>
    </>
  )
}
