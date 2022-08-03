import React from 'react'
import BillingForm from './BillingForm'
import {useHistory} from "react-router-dom"




const BillingContainer = (props) => {
    const hitsory = useHistory()
    const handleViewAllBills  =() =>{
        hitsory.push("/bills/all")
    }
    
    return (
        <div>
            <div className='container my-5'>
                <button className="btn btn-outline-dark" onClick = {handleViewAllBills}>View All Bills</button>
            </div>

                <BillingForm />
            
        </div>
    )
}
export default BillingContainer