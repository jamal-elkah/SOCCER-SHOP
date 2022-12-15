import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { list_data } from "../data/list_data";
import { useDispatch } from "react-redux";
import ProductSameCategory from "./ProductSameCategory.jsx"
export default function Product() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product,setProduct] = useState(list_data.find(prod => prod.id == id));
    useEffect(() => {
        setProduct(list_data.find(prod => prod.id == id));
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <div>

            <div className="row mt-5 container m-auto pt-5">
                <div className="col-md-6">
                    <img src={"../" + product.image} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <p className="lead fw-bolder">
                        Rating : {product.rating.rate}
                        <i className="fa fa-star ms-2"></i>
                    </p>
                    <h3 className="fw-bold my-4">
                        {product.price} DH
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button onClick={() => dispatch({ type: "addProd", payload: product.id })} className="btn btn-outline-dark me-4">Add to Cart</button>
                    <Link to='/cart' className="btn btn-outline-dark">Go to Cart</Link>
                </div>
            </div>
            <br/><br/>
        <hr />
        <ProductSameCategory category={product.category} idCurrentProd={product.id}/>
        </div>
    )
}