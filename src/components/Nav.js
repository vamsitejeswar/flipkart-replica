import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import {auth,db} from './userauth/Firebase'
import fkhlogo from './images/fkheaderlogo.png'

const Nav = ({presentUser}) => {
    const state=useSelector((state)=>state.handleCart);
    const name = presentUser ? presentUser.email : 'Guest';

  return (
    <>
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid" id="navwidth">
            <Link className="navbar-brand me-5" to="/"><img src={fkhlogo} style={{width:"100px", height:"30px"}}/></Link>
            <Link className="nav-link ms-5 ps-5" id="cart" to="/cart"><i className="fa-solid fa-cart-shopping"></i> <b>Cart <sup id="cartlength">{state.length}</sup></b></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header" style={{backgroundColor:"#2874f0"}}>
                <img src={fkhlogo} style={{width:"100px", height:"30px"}}/>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                <li className="nav-item">
                    <input type="text" className="btn border-info" id="searchinput" placeholder='Search for Products, Brands and More'/>
                </li>
                <li className="nav-item ms-5">
                    <Link className="nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i> <b>Cart <sup id="cartlength">{state.length}</sup></b></Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle ms-5" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-regular fa-user"></i> <b>{name}</b></Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="#"><i className="fa-regular fa-user"></i> My Profile</Link></li>
                    <li><Link className="dropdown-item" to="#"><i className="fa-solid fa-box"></i> Orders</Link></li>
                    <li><Link className="dropdown-item" to="#"><i className="fa-regular fa-heart"></i> Wishlist</Link></li><hr/>
                    <li className='btn' onClick={()=>auth.signOut()}><i className="fa-solid fa-right-from-bracket"></i> Logout</li>
                    </ul>
                </li>
                <li className="nav-item ms-5">
                    <Link className="nav-link" to="#" role="button" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></Link>

                </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav