const initalAccount = [] 

const AccountReducer = (state = initalAccount, action) => {
    switch(action.type){
        case 'GET_USER' : {
            return {...action.payload}
        }
        default : {
            return state
        }
    }
   
}
export default AccountReducer