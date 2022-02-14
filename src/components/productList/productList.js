import {useSelector} from "react-redux";
import Product from "../product/product";

export default function ProductList({setActive, setObj}) {
    const {products, searchValue} = useSelector(({products}) => products)
    const filteredList = products.filter(product => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })


    return (
        <>
            {filteredList && filteredList.map(product => <Product key={product.id} setObj={setObj} product={product}
                                                          setActive={setActive}/>)}
        </>
    )

}