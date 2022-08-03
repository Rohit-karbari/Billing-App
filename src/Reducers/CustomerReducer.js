const initialCustomers = []


const CustomerReducer = (state = initialCustomers, action) => {
    switch(action.type){
        case 'ADD_CUSTOMER' : {
            return [{...action.payload}, ...state]
        }
        case 'GET_CUSTOMER' : {
            return [...action.payload]
        }
        case 'CUSTID' : {
            return action.payload
        }
        case 'DELETE' : {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
        case 'UPDATE_CUSTOMER' : {
            const newCust = state.map((ele) => {
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }else {
                    return {...ele}
                }
            })
            return newCust
        }
        default : {
            return state
        }
    }
   
}
export default CustomerReducer