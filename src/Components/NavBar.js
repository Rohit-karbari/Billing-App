import React from 'react'
import { Link, Route, useHistory, withRouter,} from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import CustomerContainer from './CustomerContainer'
import Home from './Home'
import Dashboard from './Dashboard'
import ProductContainer from './ProductContainer'
import IndCustomer from './IndCustomer'
import BillingContainer from './BillingContainer'
import BillGenerator from './BillGenerator'
import ViewAll from './ViewAll'
import swal from 'sweetalert'
import image from '../Assets/pos3.jpg'
 
const NavBar = (props) => {
    const {isLogin, handleAuth} = props
    const history = useHistory()
    return (
        <div>
            <div >
            {/* <h1 className='text-center'>Billing App</h1> */}
            </div>
            <div>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/"> Home </Link> | 
            {
                isLogin ? (
                    <>
                    <Link to='/account'>Account</Link> |<span></span>
                    <Link to="/dashboard"> Dashboard </Link> |
                    <Link to='/customers'>Customres</Link>|<span></span>
                    <Link to='/products'>Products</Link>|<span></span> 
                    <Link to='/billing'>Billing</Link>|<span></span>
                    <Link to='/logout' onClick={(e) => {
                            e.preventDefault()
                          localStorage.removeItem('token')
                          alert('Logged out Successfully')
                          handleAuth()
                          history.push("/")
                    }}>Logout</Link>
                    </>
                ) : (
                    <>                
                    <Link to="/register"> Register </Link> | 
                    <Link to="/login"> Login </Link> | 
                    </>
                )
            }
            </nav> */}
                <nav className="navbar navbar-expand-sm bg-dark" >
  <div className="container-fluid">
            <img src={image} style={{height: '40px', width:'40px'}}></img>
    <h1 style={{color: 'white'}}>POS APP</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-auto">
      <li className="nav-item active p-2">
                <Link style={{textDecoration:'none', color:'orange'} } to="/">Home</Link>
            </li>{
                isLogin ?   <>   
                <li className="nav-item p-2">
                <Link style={{textDecoration:'none', color:'orange'} } to='/account'  >Account</Link>
              </li>
              <li className="nav-item p-2">
              <Link  style={{textDecoration:'none', color:'orange'} } to="/dashboard" > Dashboard </Link>
              </li>
              <li className="nav-item p-2">
              <Link style={{textDecoration:'none', color:'orange'} } to='/customers' >Customres</Link>
              </li>
              <li className="nav-item p-2">
              <Link style={{textDecoration:'none', color:'orange'} } to='/products'  >Products</Link> 
              </li>
              <li className="nav-item p-2">
                
              </li>
              <li className="nav-item p-2">
              <Link  style={{textDecoration:'none', color:'orange'} } to='/billing'   >Billing</Link>
              </li>
              <li className="nav-item p-2">
              <Link style={{textDecoration:'none', color:'orange'} } to='/logout'   onClick={(e) => {
                                  e.preventDefault()
                                localStorage.removeItem('token')
                                swal('Logged out Successfully')
                                handleAuth()
                                history.push("/")
                          }}>Logout</Link>
              </li>
              </> :
              <>    
                <li className="nav-item p-2">
                    <Link style={{textDecoration:'none', color:'orange'} } to="/register"> Register </Link>
                    </li>
                    <li className="nav-item p-2 " >
                    <Link style={{textDecoration:'none', color:'orange'} } to="/login"> Login </Link>  
                    </li>          
                    </>

            }
   
      </ul>
    </div>
  </div>
</nav>




            </div>
            <>
            <Route path='/' component={Home} exact/>
            </>
            <Route path='/dashboard' component={Dashboard} exact/>
            <Route path='/register' component={Register} exact/>
            <Route path='/login' render={(props) => {
                return <Login {...props} handleAuth={handleAuth} exact/>
            }}/>
            <Route path='/account' component={Account} exact/>
            <Route path='/customers' component={CustomerContainer} exact/>
            <Route path='/products' component={ProductContainer} exact />
            <Route path='/customer/id' render={(props) => {
                                return <IndCustomer {...props} exact/>
                            }}/>
            <Route path='/billing' component={BillingContainer} exact/>
            <Route path='/billing/:billId' component={BillGenerator} exact={true}/>
            <Route path='/bills/all' component={ViewAll}></Route>
            <Route path='/indCust' component={IndCustomer}></Route>
        </div>
    )
}

export default withRouter(NavBar)

