import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from '../components/redux/action';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    
    const addProduct = (product) => {
        dispatch(addCart(product));
        toast.success(`${product.title} has been added to the cart!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.in/api/products/${id}`);
            const result = await response.json();
            setProduct(result.product);
            setLoading(false);
        };
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={430} className="bg-secondary" />
                </div>
                <div className="col-md-6">
                    <Skeleton />
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className='row' id="product">
                    <div className='col-12 col-md-5 text-center'>
                        <img src={product.image} alt={product.title} height="400px" width="400px" />
                    </div>
                    <div className='col-12 col-md-7'>
                        <p>{`Home>products>${product.id}`}/{product.brand}</p>
                        <h4 className='pt-3'>{product.title}</h4><hr />
                        <div className='d-flex justify-content-around'>
                            <p>Brand : <b>{product.brand}</b></p>
                            <p>Model : <b>{product.model}</b></p>
                            <p>Color : <b>{product.color}</b></p>
                        </div>
                        <p className='pd mt-3'>{product.description}</p>
                        <p className='fw-bolder'>Special price : ${product.price}</p>
                        <div className='mt-4 mb-4'>
                            <Link to="/" className='btn btn-dark py-2 px-2 me-3'>Back</Link>
                            <button className='btn btn-danger py-2 px-2 me-3' onClick={() => addProduct(product)}>Add to cart</button>
                            <Link to="/cart" className="btn btn-primary py-2 px-2 me-2">Go to cart</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <ToastContainer />
            <div className='bodybgp'>
                <div className='container' style={{ backgroundColor: "white" }}>
                    <div className='row pt-4 pb-4'>
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
