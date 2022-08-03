import {createStore , combineReducers, applyMiddleware} from 'redux' 
import thunk from 'redux-thunk' 
import AccountReducer from '../Reducers/AccountReducer'
import BillRreducer from '../Reducers/BillReducer'
import CustomerReducer from '../Reducers/CustomerReducer'
import ProductsReducer from '../Reducers/ProductsReducer'


const ConfigureStore = () => {
    const store = createStore(combineReducers({
        account : AccountReducer,
        customers: CustomerReducer,
        products: ProductsReducer,
        bills: BillRreducer
    }), applyMiddleware(thunk))
    return store
}
export default ConfigureStore 