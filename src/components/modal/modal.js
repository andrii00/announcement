import './modal.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {editProduct} from "../../reducers/productSlice";

const Modal = ({active, setActive, obj}) => {


    const {products, editProductId} = useSelector(({products}) => products);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setTitle(obj.title)
        setDescription(obj.description)
    }, [obj])

    function editFunction() {
        const findEditItemModal = {...products.find(val => val.id === editProductId)}
        findEditItemModal.title = title
        findEditItemModal.description = description
        const editedList = [...products.map(val => val.id === findEditItemModal.id ? val = findEditItemModal : val)]
        dispatch(editProduct(editedList))
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) return;
        try {
            editFunction()
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        } finally {
        }
    }


    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div
                className={active ? 'modal_content active' : 'modal'}
                onClick={event => event.stopPropagation()}
            >
                <form onSubmit={handleSubmit}>
                    <div className=' form-group'>
                        <input
                            className=' container form-control col-6'
                            type="text"
                            placeholder='title'
                            value={title}
                            onChange={({target: {value}}) => setTitle(value)}
                        />
                        <br/>
                        <input
                            className=' container form-control col-6'
                            type="text"
                            placeholder='description'
                            value={description}
                            onChange={({target: {value}}) => setDescription(value)}
                        />
                        <br/>
                        <button
                            className='btn btn-dark'
                            type='submit'
                            disabled={!title || !description}
                            onClick={() =>
                                setActive(false)
                            }
                        >Edit product
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Modal;