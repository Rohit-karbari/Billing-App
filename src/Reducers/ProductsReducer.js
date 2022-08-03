const initialProducts = []

const ProductsReducer = (state=initialProducts, action) => {
    switch(action.type){
        case 'ADD_PRODUCT' : {
            return [{...action.payload}, ...state]
        }
        case 'GET_PRODUCT' : {
            return [...action.payload ]
        }
        case 'DELETE' : {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
        case 'UPDATE_PRODUCT' : {
            const newProd = state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele, ...action.payload}
                }else {
                    return {...ele}
                }
            })
            return newProd
        }
        default : {
            return state
        }
    }
}

export default ProductsReducer