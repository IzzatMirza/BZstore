
import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {

  const year = new Date().getFullYear()


  return (
    <>
     
      <footer className='py-4 bg-dark mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='mb-0 text-center text-white' style={{ fontFamily: "cursive", fontSize: "15px" }}>&copy; {year} . All Right Reserved By BuyZone Store</p>
  </div>

            </div>
          </div>

          <div className='container mt-3'>
            <div className='row'>
              <div className='d-flex justify-content-around'>
              <Link style={{ textDecoration:"none"  , color: "Blue", fontSize: "15px" }}>Facebook</Link>
              <Link  style={{ textDecoration: "none", color: "Green", fontSize: "15px" }} > Whatsapp</Link>
              <Link style={{ textDecoration: "none", color: "yellow", fontSize: "15px" }} >Instagram</Link>
              <Link style={{ textDecoration: "none", color: "white", fontSize: "15px" }} >TikTok</Link>
              </div>
            </div>t

          </div>
      </footer>


    </>

)
}


