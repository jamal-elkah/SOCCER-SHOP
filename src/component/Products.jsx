import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { list_data } from "../data/list_data";
const Products = () => {
    const [data, setData] = useState([])
    const [type, setType] = useState('')
    useEffect(() => {
        setData(list_data)
    }, [])
        const ShowProducts = () => {
            const style_btn = "btn btn-outline-primary me-2"
        return (
            <div className="button d-flex justify-content-center mb-5">
                <button className={type === "" ? style_btn + " active" : style_btn} onClick={() => filter_data("")}>All</button>
                <button className={type === "Teams shirt" ? style_btn + " active" : style_btn} onClick={() => filter_data("Teams shirt")}>Teams shirt</button>
                <button className={type === "Soccer shoes" ? style_btn + " active" : style_btn} onClick={() => filter_data("Soccer shoes")}>Soccer shoes</button>
                <button className={type === "Sports Suits" ? style_btn + " active" : style_btn} onClick={() => filter_data("Sports Suits")}>Sports Suits</button>
                <button className={type === "Balls" ? style_btn + " active" : style_btn} onClick={() => filter_data("Balls")}>Balls</button>
            </div>
        )
    }
    function filter_data(type){
        const new_list_data = list_data.filter(prod => {
            return prod.category.indexOf(type) === 0
        })
        setType(type)
        setData(new_list_data)
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts />
                </div>
                <div className="row">
                    {
                        //---
                        data.map((product) => {
                            return (
                                <div className="col-3 mb-4" key={product.id}>
                                    <div className="card h-100 text-center p-4" >
                                        <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title}</h5>
                                            <p className="card-text lead fw-bold">{product.price} DH</p>
                                            <Link to={`/products/${product.id}`} className="btn btn-primary">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        //---
                    }
                </div>
            </div>

        </div>

    )

}




export default Products