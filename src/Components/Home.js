import React from "react";
import image from '../Assets/app.jpeg'
const Home = (props) => {
    
    return (
        <div>
        <h1 className="text-center my-5" style={{textDecoration:'dot-line'}}>Welcome To POS APP</h1>
        <img src={image} style={{height:'250px', width:'250px', margin:'20px,20px'}}/><h4 style={{color:'orange'}}>Register Page </h4>
        </div>
    )
}

export default Home