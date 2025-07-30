import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


const Signup = () =>{

    //useState hooks
    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [phone , setPhone] = useState('')
    const [success , setSuccess] = useState('')
    const [error , setError] = useState('')
    const [loading , setLoading] = useState('')

    const submit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait as we upload your data!")

        try {
            const data = new FormData()
            data.append("username",username)
            data.append("email",email)
            data.append("phone",phone)
            data.append("password",password)

            const response= await axios.post(
                "https://ndubi.pythonanywhere.com//api/signup",
                data
            )
            setLoading("")
            setSuccess(response.data.success)
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
    }

    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign Up</h2>
                {loading}
                {success}
                {error}
                <form onSubmit={submit}>
                    <input type="text" 
                    className="form-control" 
                    placeholder="enter username" 
                    onChange={(e) => setUsername(e.target.value)}
                    value = {username}
                    required/>
                    <br/>

                    <input type="email"
                    className="form-control"
                    placeholder="enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                    required />
                    <br />

                    <input type="text"
                    className="form-control"
                    placeholder="enter phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value = {phone}
                    required/>
                    <br/>

                    <input type="password"
                    className="form-control"
                    placeholder="enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value = {password}
                    
                    required/>
                    <br/>

                    <button type="submit"
                    className="btn btn-success">
                        SIGN UP
                    </button>
                </form>
                <p>Already have an account? <Link to='/signin'>Signin</Link></p>
            </div>
        </div>
    )
}

export default Signup;