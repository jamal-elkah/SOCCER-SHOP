import { useDispatch, useSelector } from "react-redux"
import { list_data } from "../data/list_data"
export default function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    if (cart.length) {
        return (
            <div className="container m-auto mt-5">
                {
                    cart.map(prod => {
                        let product_info = list_data.find(p => p.id === prod.id)
                        return (
                            <div className="row p-5 mb-5" style={{ backgroundColor: "#f7f7f7" }} key={product_info.id}>
                                <div className="col-5 text-center">
                                    <img className="" style={{ width: "300px", height: "250px" }} src={product_info.image} />
                                </div>
                                <div className="col-7">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2" className="fs-1">{product_info.title}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="fs-3">
                                                <td>Price :</td><td className="text-center">{product_info.price} DH</td>
                                            </tr>
                                            <tr className="fs-3">
                                                <td>Quntity :</td>
                                                <td className="text-center">
                                                    <button className={`ms-4 btn btn-primary ${prod.qty > 1 ? null:"disabled"}`} onClick={() => dispatch({ type: 'decProd', payload: prod.id })} style={{ width: "40px", height: "40px" }} >-</button>
                                                    <span className="ms-3 me-3 text-center" type='number' style={{ width: "40px", height: "40px" }} >{prod.qty}</span>
                                                    <button className=" btn btn-primary" onClick={() => dispatch({ type: 'incProd', payload: prod.id })} style={{ width: "40px" }}>+</button>
                                                </td>
                                            </tr>
                                            <tr className="fs-3">
                                                <td>Totale :</td><td className="text-center">{product_info.price * prod.qty} DH</td>
                                            </tr>
                                            <tr className="">
                                                <td colSpan="2" ><button className="btn btn-danger w-100 fs-4" onClick={() => dispatch({ type: 'delProd', payload: prod.id })} >Remove product</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }else{
        return(
        <h1 className="mt-5 p-4 text-center">There are no products added to the cart</h1>
        )
    }
}