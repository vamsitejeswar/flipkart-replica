import React, { useState } from 'react';
import { auth, provider } from './Firebase';
import logo from "../images/loginimg.png"

const UserAuth = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((user) => console.log(user))
            .catch((err) => console.log(err));
    };

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((user) => console.log(user))
            .catch((err) => console.log(err));
    };

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then((result) => console.log(result))
            .catch((err) => console.log(err));
    };

    return (
        <div className='container-fluid' id="loginbody">
            <div className='row justify-content-center' id="rfc">
                <div className='col-10 col-md-4 col-lg-4' id="fg">
                    <h1 style={{ color: "blue" }}>Welcome Back to Flipkart!</h1>
                    <p>"Log in to Flipkart for a seamless shopping experience, order tracking, and exclusive updates!"</p>
                    <button className='btn btn-dark' onClick={signInWithGoogle}>Continue with Google</button>
                </div>
                <div className='col-10 col-md-6 col-lg-6' id="loginright">
                    <div className='row justify-content-center'>
                    <div className='col-5 col-md-3 pt-4' id="loginleft">
                        <h2 className='p-3'>Login</h2>
                        <h6 className='pb-5'>Get access to your Orders, Wishlist and Recommendations</h6>
                        <div className="loginimg text-center mt-5"><img src={logo} style={{width:"100%",height:"130px"}} alt='loginimg'/></div>
                    </div>
                    <div className='col-7 col-md-6 pt-5' style={{border:"1px solid black",}}>
                        <center>
                            <form className='mb-3'>
                                <label>Email/Username :</label>
                                <input type="email" className='form-control' name="email" value={email} placeholder="Enter Email" onChange={changeHandler} style={{ width: "80%" }} autoComplete='off' /><br />
                                <label>Password :</label>
                                <input type="password" className='form-control mb-3' name="password" value={password} placeholder="Enter Password" onChange={changeHandler} style={{ width: "80%" }} /><br />
                                <button className='btn btn-dark' onClick={signIn}>Signin</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-dark' onClick={signUp}>SignUp</button>
                            </form>
                        <small className='p-3'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</small>
                        </center>
                    </div>
                    </div>     
                </div>
            </div>
        </div>
    );
};

export default UserAuth;
