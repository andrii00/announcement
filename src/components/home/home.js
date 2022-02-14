import './home.css'

import CreateProductsForm from "../productForm/createProductForm";
import ProductList from '../productList/productList'
import Modal from "../modal/modal";
import {useState} from "react";
import Header from "../header/header";

export default function Home() {
    const [active, setActive] = useState(false)
    const [obj, setObj] = useState({})
    return (
        <div className='bg-secondary heightHome'>
            <Header/>
            <div className='container mx-auto mt-4'>
                <CreateProductsForm/>
                <div className='row'>
                    <ProductList setObj={setObj} setActive={setActive}/>
                </div>
            </div>
            <Modal obj={obj} active={active} setActive={setActive}/>
        </div>
    )
}