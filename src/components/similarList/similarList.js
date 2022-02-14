import './similarList.css'
import {Link} from "react-router-dom";

export default function SimilarList({item}) {
    return (
        <Link to={`${item.id}`} style={{ textDecoration: 'none' }}>
            <div className='card cards mt-2 text-dark bg-'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.title}</h5>
                    <h6 className='card-subtitle'>{item.description}</h6>
                    <p>{item.dateAdded}</p>
                </div>
            </div>
        </Link>
    )
}