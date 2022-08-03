import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetUser } from '../Actions/AccountAction'
import CustomerList from './CustomerList'


const Account = (props) => {

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(startGetUser())
    },[dispatch])

    const user = useSelector((state) => {
        return state.account
    })
    return (
        <div className='' style={{marginTop:"160px"}}>
        <div className='card d-flex jsutify-content-center m-10' style={{
            width:"500px",
            height:"250px",
            margin:"auto",
            background:"orange",
        }} >
        <div className='text-center' style={{
            // marginTop:"20px"
        }}>
            <h2 className='p-2'>User Details</h2>
            <h2 className='p-2'>BuisnessName - {user.businessName}</h2>
            <h2 className='p-2'>Founder - {user.username}</h2>
            {/* <CustomerList/> */}
        </div>
        </div>
        </div>
    )
}
export default Account