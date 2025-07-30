import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import Navbar from "./Navbar"

const Makepayment = ()=>{

    const {product} = useLocation().state || {}
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const submit = async(e) =>{
        e.preventDefault()
        setMessage("please wait as we process your payment")

        try{
            const data = new FormData()
            data.append("phone",phone)
            data.append("amount",product.product_cost)

            const response = await axios.post(
                "https://ndubi.pythonanywhere.com//api/mpesa_payment",
                data
            )
            setMessage(response.data.message)
        }catch(error) {
            setMessage(error.message)
        }
    }
    
    return(
        <div>
            <Navbar/>
        <div>
            <h1>LIPA NA MPESA</h1>
            <p>Product Name:{product.product_name}</p>
            <p>Product Cost:{product.product_cost}</p>
            {message}

            <form onSubmit={submit}>
                <input type="text"
                placeholder="Enter Phone Number"
                className="form-control"
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                required/> <br/>
                
                <button 
                type="submit"
                className="btn btn-success">
                    Make Payment
                </button>
            </form>
        </div>
    </div>
    )
} 

export default Makepayment