import React,{useState, useEffect} from 'react'
import NavBar from './Components/NavBar';
import './App.css'
import { useSelector } from 'react-redux'


const App = (props) => {
  const [isLogin, setIsLogin] = useState(false)
const [isLoading, setIsLoading] = useState(true)
const products = useSelector((state)=>{
  return state.products
})
const bills = useSelector((state)=>{
  return state.bills
})
const customers = useSelector((state)=>{
  return state.customers
})
const account = useSelector((state)=>{
  return state.account
})
console.log("customers", account)
useEffect(()=>{
  if(products.length>0 || customers.length>0 || bills.length>0){
    setIsLoading(false)
  }
},[customers, products, bills])
  const handleAuth = () => {
    setIsLogin(!isLogin)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      handleAuth()
    }
  },[])
  return (
    <>
    {
      !isLoading && (
        <>
        
    <div className="app">
    <div>     
        <NavBar isLogin={isLogin} handleAuth={handleAuth}/>
    </div>
    </div>
    </>
      )
}</>
  );
}

export default App;
