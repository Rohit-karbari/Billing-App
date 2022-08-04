import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './Store/ConfigureStore';
import { asyncInitialUserDetailsFetch } from "./Actions/AccountAction"



const store = ConfigureStore()

 store.getState()

store.subscribe(() => {
     store.getState()
})

if(localStorage.hasOwnProperty('token')){
    //  store.dispatch(startGetUser())
    //  store.dispatch(StartGetCust())
    //  store.dispatch(StartGetProd())
    //  store.dispatch(StartGetBill())
    store.dispatch(asyncInitialUserDetailsFetch())
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>);

/* .app{
    background-image: url('./Assets/billing.jpeg');
    background-size: cover;
    background-position:0px;
    transition: 0.4 ease-out;
    background-attachment: fixed;
  } */

  /* .textcolour {
    position: relative;
    display: inline-block;
    margin: 30px auto;
    border-color: rgba(218, 203, 203, 0.837);
    border-radius: 16px;
  
    padding: 15px 25px;
  
    color:rgb(7, 4, 4);
    font-size: 102px;
    font-weight: 900;
  
    text-shadow: 3px 6px rgba(226, 226, 236, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
      
  } */
  
  /* .listbox{
    position: relative;
    display: inline-block;
    margin: 30px auto;
    border-color: rgba(13, 5, 5, 0.2);
    border-radius: 16px;
  
    padding: 15px 25px;
  
    color:rgba(9, 14, 12, 0.928);
    font-size: 10px;
    font-weight: 900;
    
  
    text-shadow: 6px 6px rgba(42, 42, 69, 0.5);
    text-align: center;
    box-shadow: 3px 6px rgb(15, 9, 9);
  } */

  /* .bar{
    font-size: 20px;
    word-spacing: 60px;
    text-align:right;
    text-decoration: none;
    text-decoration: rgb(255, 255, 255);
    padding: 5px,5px;
  } */