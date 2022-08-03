import React from 'react'
import CustomerForm from './CustomerForm'

const EditCustomer = (props) => {
    const {_id, name, mobile,email, handleToggle, modalStat} = props
    console.log('roh',modalStat)
    return (
        <div>
             <CustomerForm
                _id={_id}
                name={name}
                mobile={mobile}
                email={email}
                handleToggle={handleToggle}
                modalStat={modalStat}
            /> 
        </div>
    )
}
export default EditCustomer