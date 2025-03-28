import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { addCart,delCart } from './redux/action';
import { Link } from 'react-router-dom';
import emptycart from './images/emptycart.webp'

const Cart = () => {
  const state=useSelector((state)=>state.handleCart);
  const dispatch=useDispatch();

  const EmptyCart=()=>{
    return(
      <div className='container'>
        <div className='row '>
          <div className='col-md-12 py-5 bg-light text-center mb-3'>
            <img src={emptycart} style={{width:"200px", height:"200px"}}/>
            <h4 className='p-3 display-5'>Your Cart is Empty</h4>
            <Link to='/' className='btn btn-outline-dark mx-4'><i className='fa fa-arrow-left'></i>Continue Shopping</Link>
          </div>
        </div>
      </div>
    );
  };
  const addItem=(product)=>{
    dispatch(addCart(product));
  };
  const removeItem=(product)=>{
    dispatch(delCart(product));
  };
  const ShowCart=()=>{
    let subtotal=0;
    let shipping=30.0;
    let totalItems=0;
    state.map((item)=>{
      return(subtotal+=item.price * item.qty);
    });
    state.map((item)=>{
      return(totalItems+=item.qty);
    });
    return(
      <>
      <section className='h-100 gradient-custom'>
        <div className='conatiner'>
          <div className='row d-flex justify-content-center'>
            <div className='col-md-8'>
              <div className='deliveryadd d-flex justify-content-between p-2 mb-5 bg-light'>
                <p>Delivery to: <b>Hyderabad-500085</b></p>
                <button className='btn btn-dark'>Change</button>
              </div>
              <div className='card-header'>
                <h5 className='mb-4'>Item List</h5>
              </div>
              <div className='card-body'>
                {state.map((item)=>{
                  return(
                    <div key={item.id}>
                      <div className='row d-flex align-items-center'>
                        <div className='col-lg-3 col-md-12'>
                          <div className='bg-image rounded' data-mdb-ripple-color='light'>
                            <img src={item.image} alt={item.title} width={150} height={130}/>
                          </div>
                        </div>
                        <div className='col-lg-5 col-md-6'>
                          <small><strong>{item.title}</strong></small>
                        </div>
                        <div className='col-lg-4 col-md-6'>
                          <div className='d-flex mb-4' style={{maxWidth:"300px"}}>
                            <button className='btn px-3' onClick={()=>{removeItem(item)}}><i className='fas fa-minus'></i></button>
                            <p className='mx-5'>{item.qty}</p>
                            <button className='btn px-3' onClick={()=>{addItem(item)}}><i className='fas fa-plus'></i></button>
                          </div>
                          <p className='text-start text-md-center'><strong><span className='text-muted'>Price : {item.qty}</span> x ${item.price}</strong></p>
                        </div>
                      </div>
                      <hr className='my-4'/>
                    </div>
                  )
                })}
              </div>
              <Link to="/" className='btn m-4' id="additem">Add Item</Link>
            </div>
            <div className='col-md-3'>
              <div className='card mb-4'>
                <div className='card-header py-3 bg-light'>
                  <h5 className='mb-0'>Order Summary</h5>
                </div>
                <div className='card-body'>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>Products ({totalItems}) <span> ${Math.round(subtotal)}</span></li>
                    <li className='list-group-item d-flex justify-content-between align-items-center px-0'>Shipping fee <span>${shipping}</span></li>
                    <li className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                      <div><strong>Total amount</strong></div>
                      <span><strong>$ {Math.round(subtotal+shipping)}</strong></span>
                    </li>
                  </ul>
                  <Link to="/checkout" className='btn btn-dark btn-lg btn-block'>Go to Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  };
  return (
    <>
    <div className='bodybgp'>
    <div className='container pt-3' style={{backgroundColor:"white"}}>
      <h1 className='text-center'>Cart</h1>
      <hr/>
      {state.length > 0 ? <ShowCart/> : <EmptyCart/>}
    </div>
    </div>
    </>
  )
}

export default Cart