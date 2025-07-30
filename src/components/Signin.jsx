import axios from "axios";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Signin=()=>{

      //useState hooks
      const [email , setEmail] = useState('')
      const [password , setPassword] = useState('')
      const [error , setError] = useState('')
      const [loading , setLoading] = useState('')

      const navigate = useNavigate()

      const submit = async (e)=>{
        e.preventDefault()
        setLoading("Please wait as log you in!")
      

      try {
        const data = new FormData()
        data.append("email",email)
        data.append("password",password)

        const response = await axios.post(
            "https://ndubi.pythonanywhere.com//api/signin",
            data
        )

        setLoading("")
        if (response.data.user){
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/")
        }
        else {
            setError(response.data.message)
        }

        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }

    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-4">
                <h2>Sign In</h2>
                {loading}
                {error}
                <form onSubmit={submit}>
                    <input type="email"
                    className="form-control"
                    placeholder="enter email"
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                    required
                    />
                    <br/>
                    

                    <input type="password"
                    className="form-control"
                    placeholder="enter password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                    />
                    <br/>

                    <button type="submit"
                    className="btn btn-success">
                        SIGN IN
                    </button>
                </form><br/>
                Do not have an account?<Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default Signin;