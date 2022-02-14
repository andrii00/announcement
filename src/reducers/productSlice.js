import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuid} from 'uuid'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        editProductId: '',
        searchValue: ''
    },

    reducers: {
        addProducts(state, action) {
            const val = action.payload
            const date = new Date()

            state.products.push({
                id: uuid(),
                title: val.title,
                description: val.description,
                dateAdded: date.toDateString()
            })
        }
        ,
        deleteProduct(state, action) {
            return {...state, products: state.products.filter(product => product.id !== action.payload)}
        },
        editProduct(state, action) {
            state.products = action.payload
        },
        pushIdProduct(state, action) {
            state.editProductId = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        }


    }
})
export const {
    addProducts,
    deleteProduct,
    editProduct,
    pushIdProduct,
    setSearchValue
} = productSlice.actions


export default productSlice.reducer