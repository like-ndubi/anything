import { useState } from "react";
import React from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Addproduct = ()=>{
const [product_name, setProductName]= useState("")
const [product_description, setProductDesciption]= useState("")
const [product_cost, setProductCost]= useState("")
const [product_photo, setProductPhoto]= useState("")

const [error , setError] = useState('')
const [loading , setLoading] = useState('')
const [message, setMessage] = useState('')

const submit = async (e)=>{
    e.preventDefault()
    setLoading("Please wait as we add the product!")

    try {
        const data = new FormData()
        data.append("product_name",product_name)
        data.append("product_description",product_description)
        data.append("product_cost",product_cost)
        data.append("product_photo",product_photo)

       const response = await axios.post(
            "https://ndubi.pythonanywhere.com//api/add_product",
            data
        )
        setLoading("")
        setMessage('product added successfully')
    } catch (error) {
        setLoading("")
        setError(error.message)
    }
}



    return(
        <div>
            <Navbar/>
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <form onSubmit={submit}>
                    <h3>Upload Products</h3>
                    {loading}
                    {message}
                    {error}
                    <input 
                    type="text" 
                    placeholder="enter product name"
                    className="form-control"
                    value={product_name}
                    onChange={(e)=> setProductName(e.target.value)}
                    required/> <br/>

                    <textarea 
                    className="form-control"
                    placeholder="describe product"
                    value={product_description}
                    onChange={(e)=> setProductDesciption(e.target.value)}
                    required></textarea> <br/>

                    <input
                    type="number"
                    placeholder="enter product cost"
                    className="form-control"
                    value={product_cost}
                    onChange={(e)=> setProductCost(e.target.value)}
                    required
                    /> <br/>

                    <input 
                    type="file"
                    className="form-control"
                    onChange={(e)=> setProductPhoto(e.target.files[0])}
                    required
                    accept="image/*"/> <br/>

                    <button
                    className="btn btn-success"
                    type="submit">
                        Upload Product
                    </button>
                </form>
            </div>
        </div>
    </div>
    )
}


export default Addproduct;