// import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesomee'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (
        <>
          


          <div className='container mt-5'>
                <div className='row mt-5'>
                    <div className='col-12 col-md-6'>
                        <h1 className='mt-5 animate__animated animate__backInLeft animate__delay-1s' style={{fontFamily:"fantasy"}}>Let's Start Shopping
                            <span className='text-white'>__</span></h1>

                        <div style={{ border: "1px solid black" }}></div>

                        <h4 className='mt-5 animate__animated animate__flash animate__delay-2s' style={{fontFamily:"revert"}}>Welcome to our BuyZone online store, where style meets comfort. We offer a wide range of trendy clothing, chic footwear, and beauty products, including makeup and accessories, to elevate your everyday look.</h4>

                        <button id='shadow' className='btn btn-info mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="about">Shopping</Link>

                        </button>


                        <lord-icon
            src="https://cdn.lordicon.com/hwpohgdf.json"
            trigger="loop"
            delay="1500"
            state="in-dynamic"
            style={{ width: "50px", height: "50px" }}>
          </lord-icon>


                        <button id='shadow' className='btn btn-warning mt-5 animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="https://pakgames.net/#/register?invitationCode=8552295284">Play Games & Earn Money</Link>
                           
                  
                        </button>

                        <lord-icon
            src="https://cdn.lordicon.com/jtiihjyw.json"
            trigger="loop"
            delay="1500"
            state="in-reveal"
            style={{ width: "50px", height: "50px" }}>

          </lord-icon>

                        {/* <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="video">Video</Link>

                        </button> */}

                       





                        {/* <lord-icon
                            className="btn  mx-2 mt-5 "
                            src="https://cdn.lordicon.com/fdxqrdfe.json"
                            trigger="loop"
                            delay="500"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon> */}

                        <i classname="fa-brands fa-whatsapp"></i>


                    </div>

                    <div className=' col-12 col-md-6 mt-2' >
                        <img className='responsive w-100' src="simg6.png" alt="" />
                    </div>




                </div>
            </div>

            <div className='container mt-4' style={{ border: "1px solid black" }}></div>

          {/* card   card    card */}
            
            <div className='container    mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3  m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                         <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/video">Video</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3  m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

           
            
            </div>
            </div>  




{/* card    card          card            card */}


            <div className='container mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                         <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/video">Video</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

           
            
            </div>
            </div>  



            {/* card     card           ard               card  */}




            <div className='container'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                         <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/video">Video</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

           
            
            </div>
            </div>  




                {/* card     card             card          card 
                
                */}




<div className='container'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
                         <button id='shadow' className='btn btn-danger mx-2 mt-5 w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/video">Video</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top " alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

           
            
            </div>
            </div>  


        </>
    )
}
