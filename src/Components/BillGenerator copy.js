import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StartDeleteBill } from '../Actions/BillAction'
import { useHistory } from 'react-router-dom'


const BillGenerator = (props) => {
    const dispatch = useDispatch()
    const {newBill} = props
    
    const history = useHistory()
    // useEffect (() => {
    //     dispatch(StartGetBill())
    // },[dispatch])

    const bills = useSelector((state) => {
        return state.bills
    })
    
   const billCustomer = useSelector((state) => {
    return state.customers
   })
   
    
    const products = useSelector((state) => {
        return state.products
    })
    console.log('prod', products)

    const customer = billCustomer.filter(cus => cus._id === newBill.customer)[0]
   
    // const quantity = bills.map((ele) => {
    //     return ele.lineItems.map((ele)=> {
    //         return ele.quantity
    //     } )
    // })

    // useEffect(() => {
    //     const billsCustomer = billCustomer.filter((ele) => {
    //         console.log('i',ele._id === bill[0].customer)
    //         console.log('i',ele._id)
    //         console.log('i', bill[0].customer)
    //         console.log('inside')
    //         return ele._id === bill[0].customer
    //      })[0]
    //      setCus(billsCustomer)
    // },[])
    // console.log('customer', cus)
    // console.log('outside')
    

    const singleCustomerBills =() =>{
        const currentBills = bills.filter(item => item.customer === newBill.customer)
        return currentBills.map(bil => {
            const newBill = bil.lineItems.map(item => {
                const details = products.filter(prod => prod._id === item.product)[0]
                return {
                    quantity: item.quantity,
                    subTotal: item.subTotal,
                    ...details
                }
            })
            return {
                customerName:customer.name,
                billId :bil._id,
                products : newBill,
                total: bil.total
            }
        })
    
    }
    const allCustomerBills = ()=>{
        
        const allBills=  bills.map(bill =>{
            const customerDetails = billCustomer.filter(cus => {
                console.log(cus._id === bill.customer)
                console.log(cus._id )
                console.log(bill.customer)
               return cus._id === bill.customer
            })[0]
            if(customerDetails){
                const newBill = bill.lineItems.map(item => {
                    const details = products.filter(prod => prod._id === item.product)[0]
                    return {
                        quantity: item.quantity,
                        subTotal: item.subTotal,
                        ...details
                    }
                })
                return {
                    customerName:customerDetails.name,
                    billId :bill._id,
                    products : newBill,
                    total: bill.total
                }
            } else {
                return {error:"not found"}
            }       
        })
         return allBills.filter(bill => !bill.error).flat()
       
    }
    

    const currentProductDetails = newBill === "All" ?  allCustomerBills() : singleCustomerBills()

    const handleRemove = (id) => {
        const confirm = window.confirm('Are you sure')
        if(confirm){
            dispatch(StartDeleteBill(id))
        }
    }

    const handleBack = () => {
        history.push('/billing')
    }
    console.log("name",customer)

    return (
        <div>
            {
                currentProductDetails.map((ele, index) => {
                    return (
                        <div key={index}>
                            <div>
                                <h4>Customer - {ele.customerName}</h4>
                            </div>
                            <div>
                                <ol>
                                    {ele.products.map((item, ind) => {
                                        return (
                                            <li key={ind}>{`${item.name} - ${item.quantity} - ${item.subTotal}`}</li>
                                        )
                                    })}
                                </ol>
                                    
                            </div>
                            <h4>Total-{ele.total}</h4>
                            <div>
                                {newBill === 'All' && <button   className="btn btn-outline-dark" onClick={() => {handleRemove(ele.billId)}}>X</button>}
                            </div>
                            <button>DownLoad</button>
                        </div>
                    )
                })
            }
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