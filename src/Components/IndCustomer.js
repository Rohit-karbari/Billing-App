import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StartGetCustId } from '../Actions/CustomerAction'






const IndCustomer = (props) => {
    const {_id, name, email} = props

    const dispatch = useDispatch()

    const user = useSelector((state) => {
        return state.customers
    })

    console.log('user', user)

    useEffect ((_id) => {
        dispatch(StartGetCustId(_id))
    },[dispatch])

    return (
        <div>
            <h1>Individual Customer</h1>
            <h2>{name}</h2>
        </div>
    )
}
export default IndCustomer