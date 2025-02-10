// import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesomee'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
    return (
        <>
          


          <div className='container '>
                <div className='row '>
                    <div className='col-12 col-md-6 mt-5'>
                        <h1 className=' animate__animated animate__backInLeft animate__delay-1s' style={{fontFamily:"fantasy"}}>Let's Start Shopping
                            <span className='text-white'>__</span></h1>

                        <div style={{ border: "1px solid black" }}></div>

                        <h4 className=' animate__animated animate__flash animate__delay-2s' style={{fontFamily:"revert"}}>Welcome to our BuyZone online store, where style meets comfort. We offer a wide range of trendy clothing, chic footwear, and beauty products, including makeup and accessories, to elevate your everyday look.</h4>

                        <button id='shadow' className='btn text-white btn-warning mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="about">Shopping</Link>

                        </button>


                        <lord-icon
            src="https://cdn.lordicon.com/hwpohgdf.json"
            trigger="loop"
            delay="1500"
            state="in-dynamic"
            style={{ width: "50px", height: "50px" }}>
          </lord-icon>


                        <button id='shadow' className='btn btn-secondary  animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "white", fontSize: "20px" }} to="https://pakgames.net/#/register?invitationCode=8552295284">Play Games & Earn Money</Link>
                           
                  
                        </button>

                        <lord-icon
            src="https://cdn.lordicon.com/jtiihjyw.json"
            trigger="loop"
            delay="1500"
            state="in-reveal"
            style={{ width: "50px", height: "50px" }}>

          </lord-icon>

                        {/* <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="video">Video</Link>

                        </button> */}

                       





                        {/* <lord-icon
                            className="btn  mx-2  "
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



<div className='container mt-4 d-flex w-100  justify-content-center rounded mx-auto'>
            <img src="mainimg.jpg" class="img-fluid " alt="Responsive image"></img>
            </div>
          {/* card   card    card */}



{/* FILTERS */}





<div className='container mt-4'>
  <div className='row'>

<div className='d-flex  justify-content-center mt-2'>
<button id='shadow' className='btn  mx-2 responsive w-50 animate__animated animate__swing animate__delay-4s '>
    <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="/">All👀</Link>

</button>
</div>
<div className='d-flex  justify-content-center mt-2'>

    <button id='shadow' className='btn  mx-2  w-50 animate__animated animate__swing animate__delay-4s justify-content-center'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="clothe">Clothes🥼</Link>

                        </button>
</div>
<div className='d-flex  justify-content-center mt-2'>

                        <button id='shadow' className='btn  mx-2  w-50 animate__animated animate__swing animate__delay-4s justify-content-center'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="watch">Watches⌚</Link>

                        </button>
</div>
<div className='d-flex  justify-content-center mt-2'>


                        <button id='shadow' className='btn  mx-2  w-50 animate__animated animate__swing animate__delay-4s justify-content-center'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="shoes">Shoes👟</Link>

                        </button>
                        </div>
                        <div className='d-flex  justify-content-center mt-2'>

                        <button id='shadow' className='btn  mx-2  w-50 animate__animated animate__swing animate__delay-4s justify-content-center'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="other">Others🤷‍♀️</Link>

                        </button>
                        </div>
                    

                    
    </div>

  </div>







            
            <div className='container    mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3  m-3" style={{width :"18rem"}}>
              <img src="s1i2.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3999rs <span className='text-info'>11%</span><span className='text-danger'>off</span></h5>
                <p class="card-text">
                  <li>
                 3pcs Women's Unstitched viscose Embroidred Suit
                  </li>

                  <li>
                  <span className='text-danger'>Product ID: 99001</span>
                  </li>
                  

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                  </p>
            
                         <button id='shadow' className='btn  btn-info  mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop1">Buy Now</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s2i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3199rs <span className='text-info'>9%</span><span className='text-danger'>off</span></h5>
                <p class="card-text">
                <li>
                 3pcs Women's Unstitched viscose Embroidred Suit
                  </li>

                  <li>
                  <span className='text-danger'>Product ID: 99002</span>
                  </li>
                  

                  <li>
                  Delivery in 3-5 days
                  </li>
                </p>
                  <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                          <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop2">Buy Now</Link>
              
                                      </button>  

              </div>
            </div>
            
            
            <div class="card col-12 col-md-3  m-3" style={{width :"18rem"}}>
              <img src="shop1img.jpeg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop3">Buy Now</Link>
            
                                    </button>  

              </div>
            </div>

           
            
            </div>
            </div>  




{/* card    card          card            card */}


            <div className='container mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop4">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop5">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop6">Buy Now</Link>
            
                                    </button>  

              </div>
            </div>

           
            
            </div>
            </div>  



            {/* card     card           ard               card  */}




            <div className='container'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
            
                         <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop7">Buy Now</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop8">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop9">Buy Now</Link>
            
                                    </button>  

              </div>
            </div>

           
            
            </div>
            </div>  




                {/* card     card             card          card 
                
                */}




<div className='container'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>
            
                         <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop10">Buy Now</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop11">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop12">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>



            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop13">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>




            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop14">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>




            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="simg.png" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">Card title <span className='text-info'>RS</span></h5>
                <p class="card-text">
                <li>
                  Trouser
                  </li>

                  <li>
                  Product ID:
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn-info mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop15">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>

           
            
            </div>
            </div>  

            <div className='d-flex justify-content-center '>

            <button id='shadow' className='btn  mx-2  w-auto animate__animated animate__swing animate__delay-4s justify-content-center'>
                            <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }}  to="about">Continue Shopping...</Link>

                        </button>
                        <lord-icon
            src="https://cdn.lordicon.com/hwpohgdf.json"
            trigger="loop"
            delay="1500" 
            state="in-dynamic"
            style={{ width: "50px", height: "50px" }}>
          </lord-icon>
          </div>

        </>
    )
}
