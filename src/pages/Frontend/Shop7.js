import React from 'react'
import { Link } from 'react-router-dom'


export default function Shop7() {
  return (
    <>
    
    <div className='container '>
      <div className='row'>
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s7i2.jpg' className='responsive'></img>
    </div>
    
    
    <div className='rounded col-12 col-md-6 col-sm-6 mt-3'>
    <img src='s7i1.jpg' className='responsive'></img>
    
    </div>
      </div>
    
    
    </div>
     
    <div className='container mt-3'>
    <li>
      
    Fixer
    </li>
    <li>
    Fitme Tube
    </li>
    <li>
    Contour Stick
    </li>
    <li>
    Loose Powder
    </li>
    
    
    <li>
    Compact Powder
    </li>
    <li>
    
    Primer
    </li>
    <li>
    Gloss
    </li>
    
    <li>
    Brushes Pack    
    </li>
    <li>
    Mascara    
    </li>
    <li>
    
    Liner

    </li>
    <li>
    White Pencil
    </li>
    <li>
    Lipstick    
    </li>
    
    <li>
    Dermatol    
    </li>

    <li>
    
    Blender
    </li>
    <li>

    Iconic Highlighter

    </li>
    <li>
    Pro Concealer    
    </li>
    
    <li>
    Package Includes: 16 x Makeup Deal    
    </li>
    {/* Product Code: MZ90920010MPFR */}

    <li><span className='text-danger'>Return Within 7 days</span>
                      
                      </li>
                  
      <h3><span className='text-danger'>Product ID</span>: 99007</h3>
    
    
    </div>
    
        
    
    <div className='d-flex justify-content-center'>
           <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                                  <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/contact">Place Order</Link>
                      
                                              </button>  
                                              </div>
    
      
    
    </>
  )
}
