import React from 'react'
import { useSelector } from 'react-redux'
import { StartDeleteBill } from '../Actions/BillAction'
import { useHistory, useLocation,useParams } from 'react-router-dom'
import ReactToPdf from 'react-to-pdf'
import { useRef } from 'react'



const BillGenerator = (props) => {
    const ref = useRef()
    const params = useParams()
    const bill = useSelector((state)=>{
        console.log("state.bills",state.bills)
        return state.bills.filter(bil => bil._id === params.billId)[0]
    })
    console.log("bill", params.billId)
        const customer  = useSelector((state)=>{
        return state.customers.filter(cus => cus._id === bill.customer)[0]
    })
    const products = useSelector((state)=>{
        return state.products
    })

    const billProducts = bill.lineItems.map(item =>{
        const result =  products.filter(prod => prod._id === item.product)[0]
        result.quantity = item.quantity
        result.subTotal = item.subTotal
        return result 
    })
    return (
        <div style={{border:"1px solid black", backgroundColor:"white"}}>
                <div ref={ref}  >
                <h2>{customer.name}</h2>
                <ul>
                    { 
                    billProducts.map((prod,index)=>{
                        return (
                            <div >
                            
                                <p >Product - {prod.name}- {prod.subTotal}</p>

                                </div>
                        )
                    })
                    
                    }
                </ul>
                <p>Total - {bill.total}</p>
                </div>
            <div>
            <ReactToPdf targetRef={ref} filename="bill.pdf" x={.5} y={.5} scale={0.8}>
        {({toPdf}) => (
            <button onClick={toPdf}>download</button>
        )}
    </ReactToPdf>
            </div>
        </div>


    )
}
export default BillGenerator

//  <div className='row'>
//                                 <div className='col-md-6'>
//                                 <div className='row'>
//                                     <div className='col-md-4'>
//                             <div className="card" style={{width: '18rem'}}>
//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <h5 className="card-title">{ele.total}</h5>
//                                     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                                     <button>Delelte</button>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 </div>
//                                 </div>
// </div> 