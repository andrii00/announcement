import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../reducers/productSlice";

export default function Header() {
    const {searchValue} = useSelector(({products}) => products);
    const dispatch = useDispatch()


    return <>
        <nav className="navbar navbar-light bg-dark">
            <div className="container-fluid">
                <form className="d-flex m-auto">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchValue}
                        onChange={(e) => dispatch(setSearchValue(e.target.value))}
                    />

                </form>
            </div>
        </nav>
    </>

}

