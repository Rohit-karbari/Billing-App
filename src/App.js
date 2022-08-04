import React,{useState, useEffect} from 'react'
import NavBar from './Components/NavBar';
import './App.css'
import { useDispatch} from 'react-redux'
import {asyncInitialUserDetailsFetch} from "./Actions/AccountAction"


const App = (props) => {
  const [isLogin, setIsLogin] = useState(false)
const [isLoading, setIsLoading] = useState(true)
// const products = useSelector((state)=>{
//   return state.products
// })
// const bills = useSelector((state)=>{
//   return state.bills
// })
// const customers = useSelector((state)=>{
//   return state.customers
// })
// const account = useSelector((state)=>{
//   return state.account
// })
const isTokenFound = localStorage.hasOwnProperty("token")

  const handleAuth = () => {
    setIsLogin(!isLogin)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    if (isTokenFound) {
        dispatch(asyncInitialUserDetailsFetch(setIsLoading))
    } else {
        setIsLoading(!isLoading)
    }
}, [setIsLoading])

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
