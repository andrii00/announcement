import {useSelector} from "react-redux";
import './fullProduct.css'
import SimilarList from "../similarList/similarList";

export default function FullProduct({match: {params: {id}}}) {
    const {products} = useSelector(({products}) => products)

    const fullFindProduct = products.find(prod => prod.id === id)


    const postSplitTitle = fullFindProduct.title.toLowerCase().replace(',', ' ').split(' ')
    const postSplitDesc = fullFindProduct.description.toLowerCase().replace(',', ' ').split(' ')


    const similarList = products.filter(value => {
        const title = value.title.toLowerCase().replace(',', ' ').split(' ')
        const desc = value.description.toLowerCase().replace(',', ' ').split(' ')
        const someTitle = title.some(value1 => postSplitTitle.includes(value1))
        const someDesc = desc.some(value1 => postSplitDesc.includes(value1))
        return someTitle && someDesc && value.id !== id
    }).slice(0, 3)


    return (
        <div className='bg-secondary height pt-4 text-white'>
            <div className='container heightCard col-6 bg-dark'>
                <ul>
                    Title:<h4>{fullFindProduct.title}</h4>
                    Description:<h5>{fullFindProduct.description}</h5>
                    <h6>{fullFindProduct.dateAdded}</h6>
                </ul>
            </div>
            <div className={'container mt-4 mt-2 col-4'}>
                {similarList && similarList.map(value => <SimilarList key={value.id} item={value}/>)}
            </div>
        </div>
    )
}
