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

                        {/* <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
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


<div className='container d-flex w-100 justify-content-center mx-auto mt-5'>
  {/* <video autoPlay src='vid1.mp4'>

  </video> */}
    {/* <iframe class="embed-responsive-item" src="vid1.mp4"></iframe> */}
{/* 
    <video width="320" height="240" controls  loop autoPlay>
  <source src="vid1.mp4" type="video/mp4"/>

  Your browser does not support the video tag.
</video> */}

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

    <button  id='shadow' className='btn  mx-2  w-50 animate__animated animate__swing animate__delay-4s justify-content-center'>
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






  <div className='container mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s1i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3900<span className='text-'>rs </span><span className='text-danger'>9%off</span></h5>

                <p class="card-text">

                  <li>
                  Women's 3PCS Suit
                  </li>

                  <li>
                  <span>Product ID:</span>99001
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop1">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s2i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3299<span className='text-'>rs </span><span className='text-danger'>4%off</span></h5>

                <p class="card-text">

                  <li>
                  Women's 3PCS Suit
                  </li>

                  <li>
                  <span>Product ID:</span>99002
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop2">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s3i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3850<span className='text-'>rs </span><span className='text-danger'>3%off</span></h5>

                <p class="card-text">

                  <li>
                  Women's Premium Quality Soul Shoes
                  </li>

                  <li>
                  <span>Product ID:</span>99003
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop3">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            </div>
            </div>
            
            
            
            
            
              
            
            




{/* card    card 22222222222222222222222 222222     22222222   card   222222222222         card */}




<div className='container mt-3'>
            <div className='row justify-content-center'>
            <div  class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s4i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1650<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>

                <p class="card-text">

                  <li>
                  Shoes With Premium Quality
                  </li>

                  <li>
                  <span>Product ID:</span>99004
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop4">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s5i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">2999<span className='text-'>rs </span><span className='text-danger'>3%off</span></h5>

                <p class="card-text">

                  <li>
                 3 Pcs Women's unstitched katan silk suit with khussa
                  </li>

                  <li>
                  <span>Product ID:</span>99005
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop5">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s6i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3999<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>

                <p class="card-text">

                  <li>
                  Stunning Purple 3 Pcs Embroidered Lawn suit with Hand Work
                  </li>

                  <li>
                  <span>Product ID:</span>99006
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop6">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            </div>
            </div>
            


            {/* card     card           ard               card  */}






            <div className='container mt-3'>
            <div className='row justify-content-center'>
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s7i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1650<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>

                <p class="card-text">

                  <li>
                  16 Items Makeup Deal
                  </li>

                  <li>
                  <span>Product ID:</span>99007
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop7">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s8i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">2400<span className='text-'>rs </span><span className='text-danger'>3%off</span></h5>

                <p class="card-text">

                  <li>
                  Men's Formal Loafers-Light weight & Stylish
                  </li>

                  <li>
                  <span>Product ID:</span>99008
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop8">Buy Now</Link>
            
                                    </button>  
                                    
            
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s9i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">2150<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>

                <p class="card-text">

                  <li>
                  Stylish Men's Rexine Loafers
                  </li>

                  <li>
                  <span>Product ID:</span>99009
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
                                        <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
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
              <img src="s10i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1699<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>
                <p class="card-text">
                <li>
                Men's Rexine Casual Sandals
                  </li>

                  <li>
                  <span>Product ID:</span>99010
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>
            
                         <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop10">Buy Now</Link>
            
                                    </button>  
            
              </div>
            </div>
            
            
            
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s11i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">3500<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>
                <p class="card-text">


                  <li>
                  20 Smart Watch
                  </li>
                            <li>


                  <span>Product ID:</span>99011
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop11">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>
            
            
            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s12i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">12999<span className='text-'>rs </span><span className='text-danger'>3%off</span></h5>
                <p class="card-text">
                <li>
                Hottu Hot10 Pulse Waterproof Smartwatch
                  </li>

                                    <li>
                  <span>Product ID:</span>99012
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize:"20px" }} to="/shop12">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>



            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s13i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1599<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>
                <p class="card-text">
                <li>
                Men's Rexine Casual Sandals
                  </li>

                                    <li>
                  <span>Product ID:</span>99013
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop13">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>




            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s14i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1699<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>
                <p class="card-text">
                <li>
                Men's Raxine Casual Loafers
                  </li>

                          <li>
                  <span>Product ID:</span>99014
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
                                        <Link style={{ textDecoration: "none", color: "black", fontSize: "20px" }} to="/shop14">Buy Now</Link>
            
                                    </button>  
              </div>
            </div>




            <div class="card col-12 col-md-3 m-3" style={{width :"18rem"}}>
              <img src="s15i1.jpg" class="card-img-top mt-2" alt="..."/>
              <div class="card-body">
              <h5 class="card-title">1650<span className='text-'>rs </span><span className='text-danger'>2%off</span></h5>
                <p class="card-text">
                <li>
                Men's Raxine Casual Loafers
                  </li>

                            <li>
                  <span>Product ID:</span>99015
                  </li>

                  <li>
                  Delivery in 3-5 days
                  </li>
                  
                </p>

                <button id='shadow' className='btn btn- mx-2  w-auto animate__animated animate__swing animate__delay-4s'>
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
