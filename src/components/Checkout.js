import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router'

const Checkout = () => {
    const state=useSelector((state)=>state.handleCart);
    const EmptyCart=()=>{
        return(
            <div className='conatainer'>
                <div className='row'>
                    <div className='col-md-12 py-5 bg-light text-center'>
                        <h4 className='p-3 display-5'>No item in the cart</h4>
                        <Link to="/" className='btn btn-outline-dark mx-4'><i className='fa fa-arrow-left'></i> Continue shopping</Link>
                    </div>
                </div>
            </div>
        );
    };
    const ShowCheckout=()=>{
        let subtotal=0;
        let shipping=30.0;
        let totalItems=0;
        state.map((item)=>{
            return (subtotal+=item.price * item.qty)
        });
        state.map((item)=>{
            return(totalItems+=item.qty);
        });
        return(
            <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 col-lg-4 order-md-last'>
                        <div className='card mb-4'>
                            <div className='card-header py-3 bg-light'>
                                <h5 className='mb-0'>Order Summary</h5>
                            </div>
                            <div className='card-body'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>Products ({totalItems})<span>${Math.round(subtotal)}</span></li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center px-0'>Shipping <span>${shipping}</span></li>
                                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                                        <div><strong>Total amount</strong></div>
                                        <span><strong>$ {Math.round(subtotal + shipping)}</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 col-lg-8'>
                        <div className='card mb-4'>
                            <div className='card-header py-3'>
                                <h4 className='mb-0'>Billing address</h4>
                            </div>
                            <div className='card-body'>
                                <form className='needs-validation' Validate>
                                    <div className='row g-3'>
                                        <div className='col-sm-6 my-1'>
                                            <label for="firstName" className='form-label'>First name</label>
                                            <input type="text" className='form-control' id="firstName" placeholder='' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Valid first name is required</div>
                                        </div>
                                        <div className='col-sm-6 my-1'>
                                            <label for="lastName" className='form-label'>Last name</label>
                                            <input type='text' className='form-control' id="lastName" placeholder='' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Valid last name is required</div>
                                        </div>
                                        <div className='col-12 my-1'>
                                            <label for="email" className='form-label'>Email</label>
                                            <input type="email" className='form-control' id="email" placeholder='you@example.com' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Please enter a valid email address for shipping updates.</div>
                                        </div>
                                        <div className='col-12 my-1'>
                                            <label for="address" className='form-label'>Address</label>
                                            <input type='text' className='form-control' id="address" placeholder='1234 Main St' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Please enetr your shipping address</div>
                                        </div>
                                        <div className='col-md-5 my-1'>
                                            <label for="country" className='form-label'>Country</label>
                                            <br/>
                                            <select className='form-select' id="country" required>
                                                <option value="">Choose...</option>
                                                <option>India</option>
                                            </select>
                                            <div className='invalid-feedback'>Please select a valid country</div>
                                        </div>
                                        <div className='col-md-4 my-1'>
                                            <label for="state" className='form=label'>State</label>
                                            <br/>
                                            <select className='form-select' id="state" required>
                                                <option value="">Choose...</option>
                                                <option>Andhra Pradesh</option>
                                                <option>Telangana</option>
                                            </select>
                                            <div className='invalid-feedback'>Please provide a valid state</div>
                                        </div>
                                        <div className='col-md-3 my-1'>
                                            <lable for="zip" className="form-label">Zip</lable>
                                            <input type="text" className='form-control id="zip' placeholder='' required/>
                                            <div className='invalid-feedback'>Zip code required</div>
                                        </div>
                                    </div>
                                    <hr className='my-4'/>
                                    <h4 className='mb-3'>Payment</h4>
                                    <div className='row gy-3'>
                                        <div className='col-md-6'>
                                            <label for="cc-name" className='form-label'>Name on card</label>
                                            <input type='text' className='form-control' id="cc-name" placeholder='' required autoComplete='off'/>
                                            <small className='text-muted'>Full name as displayed on card</small>
                                            <div className='invalid-feedback'>Nme on card is required</div>
                                        </div>
                                        <div className='col-md-6'>
                                            <label for="cc-number" className='form-label'>Credit card number</label>
                                            <input type='text' className='form-control' id="cc-number" placeholder='' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Credit card number is required</div>
                                        </div>
                                        <div className='col-md-3'>
                                            <label for="cc-expiration" className='form-label'>Expiration</label>
                                            <input type='text' className='form-control' id="cc-expiration" placeholder='' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Expiration date required</div>
                                        </div>
                                        <div className='col-md-3'>
                                            <label for="cc-cvv" className='form-label'>CVV</label>
                                            <input type='text' className='form-control' id="cc-cvv" placeholder='' required autoComplete='off'/>
                                            <div className='invalid-feedback'>Security code required</div>
                                        </div>
                                    </div>
                                    <hr className='my-4'/>
                                    <button className='w-100 btn btn-primary' type="submit">Continue to Pay</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
  return (
    <>
    <div className='bodybgp'>
    <div className='container' style={{backgroundColor:"white"}}>
        <h1 className='text-center'>Checkout</h1>
        <hr/>
        {state.length ? <ShowCheckout/> : <EmptyCart/>}
    </div>
    </div>
    </>
  )
}

export default Checkout