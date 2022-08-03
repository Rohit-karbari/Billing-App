import React from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'

const  CustomerContainer = (props) => {
    return (
        <div className='row my-5'>
            <div className="col-md-4">
            <CustomerForm/>
            </div>
            <div className="col-md-8">
                <div className='row'>
                    <CustomerList/>
            </div>
            </div>

        </div>
    )
}
export default CustomerContainer