import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { StartGetCust } from '../Actions/CustomerAction'
import CustomerItem from './CustomerItem'


const CustomerList = (props) => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(StartGetCust())
    // },[dispatch])

    const customers = useSelector((state) => {
        return state.customers
    })
    return(
        
        <div className='container'>
            <div className='text-center'>
            {
                customers.length === 0 ? (
                    <div>
                    <div>
                    <h3>No customers found</h3>
                    <p>Add your first customer</p>
                    </div>
                    </div>
                ) : (
                    <div >
                    <div>
                    <h2>Customers List - {customers.length}</h2><hr/>
                     <div className='row' style={{ maxHeight : '500px',overflow : 'auto'}}>
                    {customers.map((ele, i) => {
                        return <CustomerItem key={i} {...ele}/>
                    })}
                    </div>
                    </div>
                    </div>
                )
            }
           </div>
        </div>
        
    )
}
export default CustomerList