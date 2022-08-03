const initialBill = []

const BillRreducer = (state = initialBill, action) => {
    switch(action.type) {
        case 'ADD_BILL' : {
            return [{...action.payload}, ...state]
        }
        case 'GET_BILL' : {
            return [...action.payload]
        }
       
        case 'DELETEBILL' : {
            return state.filter((ele) => {
                return ele._id !== action.payload
            })
        }
        default : {
            return state
        }
    }
}
export default BillRreducer