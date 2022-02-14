import {useState} from "react";
import './createForm.css'
import {useDispatch} from "react-redux";
import {addProducts} from "../../reducers/productSlice";

export default function CreateProductsForm() {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !description) return;
        try {

            dispatch(addProducts({title, description}))
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e);
        } finally {
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group container col-4'>
                <input
                    className='form-control'
                    type="text"
                    placeholder='title'
                    value={title}
                    onChange={({target: {value}}) => setTitle(value)}/>
            </div>
            <div className='form-group container col-4'>
                <input
                    className='form-control'
                    type="text"
                    value={description}
                    placeholder='description'
                    onChange={({target: {value}}) => setDescription(value)}/>
            </div>
            <button
                className='btn btn-light'
                type='submit'

                disabled={!title || !description}>Create product
            </button>
        </form>

    )
}