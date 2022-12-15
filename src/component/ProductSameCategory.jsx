import { Link } from "react-router-dom"
import { list_data } from "../data/list_data"

export default function ProductSameCategory(props) {
    const products_ = list_data.filter(prod => (prod.category === props.category && prod.id !== props.idCurrentProd))
    return (
        <div className="container mt-5">
            <h1 className="text-center display-4 fw-bold mt-5" >Products of the same category</h1>
            <div className="row mt-5">
                {
                    //---
                    products_.map((product) => {
                        return (
                            <div className="col-3 mb-4" key={product.id}>
                                <div className="card h-100 text-center p-4" >
                                    <img src={"../" + product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text lead fw-bold">{product.price} DH</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-primary">Go somewhere</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    //---
                }
            </div>
        </div>

    )
}