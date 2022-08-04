import React from "react";
import { useSelector } from "react-redux";
import { Chart } from "react-google-charts";

const AboutApp = (props) => {
    const account = useSelector((state) => {
        return state.account
    })

    const products = useSelector((state) => {
        return state.products
    })

    const customers = useSelector((state) => {
        return state.customers
    })

    const bills = useSelector((state) => {
        return state.bills
    })


        const data = [
            ['Type', "numbers",{ role: "style" }],
            ["products", products.length,"black"],
            ["Customers",customers.length,'orange'],
            ["bills", bills.length,'black'],
        ];

        const options = {
            title: "Admin Dashboard",
        };

    return (
        <div className="row p-5 ">
            
                     <Chart
      chartType="ColumnChart"
      data={data}
      options={options}
      width={"80%"}
      height={"400px"}
    />
            <div className="col-md-6">
                <div className="card" style={{width: '18rem', background:"orange"}}>
                    <div className="card-body">
                        <h5 className="card-title"> Customers</h5>
                        <h5 className="card-title">Total - {customers.length}</h5>
                        <p className="card-text">{`Number of products avilable in ${account.businessName}`}</p>
                    </div>
                    </div>
                    </div>
            
            
                    <div className='col-md-6'>
                        
                <div className="card" style={{width: '18rem',background:"orange"}}>
                    <div className="card-body">
                        <h5 className="card-title">Products</h5>
                        <h5 className="card-title">Total - {products.length}</h5>
                        <p className="card-text">{`Number of products avilable in ${account.businessName}`}</p>
                    </div>
                    </div>
            </div> 
            <div className='col-md-6 my-5'>
                        
                        <div className="card" style={{width: '18rem',background:"orange"}}>
                            <div className="card-body">
                                <h5 className="card-title">Bills</h5>
                                <h5 className="card-title">Total - {bills.length}</h5>
                                <p className="card-text">{`Number of products avilable in ${account.businessName}`}</p>
                            </div>
                            </div>
                    </div> 

        </div>
    )
}

export default AboutApp