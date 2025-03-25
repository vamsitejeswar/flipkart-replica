import React from 'react'
import { Link } from 'react-router-dom';
import {auth,db} from './userauth/Firebase'
import ScrollToTop from './OnclickScrolltop';
import Products from './Products';
import crousel1 from './images/crousel1.webp'
import crousel2 from './images/crousel2.webp'
import crousel3 from './images/crousel3.webp'
import crousel4 from './images/crousel4.webp'
import mobileimg from './images/mobileimg.jpg'
import headsetimg from './images/headsetimg.jpg'
import tvimg from './images/tvimg.jpg'
import gamingimg from './images/gamingimg.jpg'

const Home = () => {
  return (
    <>
    <div className="bodybg">
        <div className='container-fluid ' id="hc">
            <div className='row'>
                <div className='col-12 col-md-7'>
                    {/* crousel */}
                    <div className="carousel slide" id="car" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#car" data-bs-slide-to="0" className="active"></button>
                            <button type="button" data-bs-target="#car" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#car" data-bs-slide-to="2"></button>
                            <button type="button" data-bs-target="#car" data-bs-slide-to="3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active"><img src={crousel1} style={{width:"100%",height:"230px"}}/></div>
                            <div className="carousel-item"><img src={crousel2} style={{width:"100%",height:"230px"}}/></div>
                            <div className="carousel-item"><img src={crousel3} style={{width:"100%",height:"230px"}}/></div>
                            <div className="carousel-item"><img src={crousel4} style={{width:"100%",height:"230px"}}/></div>
                        </div>
                        <button className="carousel-control-prev" data-bs-target="#car" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span></button>
                        <button className="carousel-control-next" data-bs-target="#car" data-bs-slide="next"><span className="carousel-control-next-icon"></span></button>
                    </div>
                </div>
                <div className='col-12 col-lg-5' id="fourimg">
                    {/* first row */}
                    <div className='row mt-3 me-3 mx-auto'>
                        <div className='col-6'>
                            <div class="card">
                                <div class="row">
                                    <div class="col-5 col-md-5">
                                    <img src={mobileimg} className="img-fluid rounded-start" alt="..." style={{width:"100px",height:"80px"}}/>
                                    </div>
                                    <div class="col-7 col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">Mobiles</h5>
                                        <p class="card-text">Bestselling</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="card">
                                <div class="row">
                                    <div class="col-5 col-md-5">
                                    <img src={headsetimg} className="img-fluid rounded-start" alt="..." style={{width:"100px",height:"80px"}}/>
                                    </div>
                                    <div class="col-7 col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">Headsets</h5>
                                        <p class="card-text">Bestselling</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className='row mt-3 me-3 mx-auto'>
                        <div className='col-6'>
                            <div class="card">
                                <div class="row">
                                    <div class="col-5 col-md-5">
                                    <img src={tvimg} className="img-fluid rounded-start pt-2 ps-2" alt="..." style={{width:"100px",height:"80px"}}/>
                                    </div>
                                    <div class="col-7 col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">TV's</h5>
                                        <p class="card-text">Bestselling</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div class="card">
                                <div class="row">
                                    <div class="col-5 col-md-5">
                                    <img src={gamingimg} className="img-fluid rounded-start" alt="..." style={{width:"100px",height:"80px"}}/>
                                    </div>
                                    <div class="col-7 col-md-7">
                                    <div class="card-body">
                                        <h5 class="card-title">Gaming</h5>
                                        <p class="card-text">Bestselling</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ScrollToTop/>
    <Products/>
    </>
  )
}

export default Home