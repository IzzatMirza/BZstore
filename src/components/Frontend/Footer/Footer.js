
import React from 'react'


export default function Footer() {

  const year = new Date().getFullYear()

  return (
    <>
     
      <footer className='py-4 bg-secondary mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <p className='mb-0 text-center text-white' style={{ fontFamily: "cursive", fontSize: "30px" }}>&copy; {year} . All Right Reserved By PakGames</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
