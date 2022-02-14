import {useDispatch} from "react-redux";
import {deleteProduct, pushIdProduct} from "../../reducers/productSlice";
import {Link} from "react-router-dom";

export default function Product({product, setActive, setObj}) {
    const dispatch = useDispatch()
    return (
        <div className='col-md-4 mt-4 mb-2'>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>{product.title}</h5>
                    <h6 className='card-subtitle mb-2 text-muted'>{product.description}</h6>
                    <p className='card-text'>{product.dateAdded}</p>
                    <div className='d-flex justify-content-around'>
                        <button
                            className='btn btn-outline-dark'
                            onClick={() => {
                                dispatch(deleteProduct(product.id))
                            }}
                        >
                            delete
                        </button>
                        <button
                            className='btn btn-outline-dark'
                            onClick={() => {
                                setActive(true)
                                dispatch(pushIdProduct(product.id))
                                setObj(product)
                            }
                            }>edit
                        </button>

                        <Link to={`${product.id}`}>
                            <button className='btn btn-outline-dark'>Show details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

}