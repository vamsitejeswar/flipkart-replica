import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.in/api/products");
            const result = await response.json();
            const res = result.products.slice(6, 50).filter(product => product.id < 18 || product.id > 42);
            setData(res);
            setFilter(res);
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <div className="row ms-0" id="pproducts">
                {Array(8).fill().map((_, index) => (
                    <div className="col-6 col-md-4 col-lg-3 mt-3" key={index}>
                        <div className="card text-center m-2" style={{ height: "265px" }}>
                            <Skeleton height={200} className="p-3" />
                            <div className="card-body d-flex justify-content-between">
                                <Skeleton width="60%" height={20} />
                                <Skeleton width="40%" height={20} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    const filterProducts = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    useEffect(() => {
        const filteredProducts = data.filter((product) => {
            return product.brand.toLowerCase().includes(search.toLowerCase());
        });
        setFilter(filteredProducts);
    }, [search, data]);

    const ShowProducts = () => {
        return (
            <div className="row">
                <div className="col-12 col-md-2 mt-2" id="pbutton">
                    <h3 className='categories p-2'>Categories</h3>
                    <div className="buttons p-2">
                        <button className="btn m-1 active" onClick={() => setFilter(data)}><b>All</b></button>
                        <button className="btn m-1" onClick={() => filterProducts("tv")}><b>TV</b></button>
                        <button className="btn m-1" onClick={() => filterProducts("mobile")}><b>Mobiles</b></button>
                        <button className="btn m-1" onClick={() => filterProducts("audio")}><b>Headset</b></button>
                        <button className="btn m-1" onClick={() => filterProducts("gaming")}><b>Gaming</b></button>
                    </div>
                </div>

                <div className="col-12 col-md-10 mb-4"> 
                    <div className='sinput'>
                    <h4 className='sc mt-3'>Shop By Category</h4>
                        <input 
                            type="text" 
                            className="form-control mt-3" 
                            id="pinput"
                            placeholder="Search by brand" 
                            value={search} 
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </div>
                    <div className="row ms-0" id="pproducts">
                        {filter.filter(product => product.id !== 8 && product.id !== 14 && product.id !== 17).map((product) => {
                            return (
                                <div className="col-6 col-md-4 col-lg-3 mt-3" key={product.id}>
                                    <div className="card text-center m-2" style={{ height: "265px" }}>
                                        <Link to={`/products/${product.id}`}>
                                            <img className="p-3" src={product.image} alt={product.title} height="200px" width="80%" />
                                        </Link>
                                        <div className="card-body d-flex justify-content-between">
                                            <p className="card-text text-dark fw-bolder">{product.brand}</p>
                                            <p className="card-text text-danger fw-bolder">$ {product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id='productsbg'>
        <div className="container-fluid" id="productsw">
            <div className="row justify-content-center">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
        </div>
    );
};

export default Products;
