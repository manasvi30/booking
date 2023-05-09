import { faEnvelope ,faLock,faUser } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../../components/navbar/Navbar";
import "./register.css"
import { useContext, useState, useEffect } from "react"
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  

  import {Link} from "react-router-dom";

import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"

const Register = () => {

  
  
  

  const [credentials , setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
})

const{user, loading, error, dispatch} = useContext(AuthContext)

const navigate = useNavigate()

const handleChange = (e)=>{
    setCredentials((prev) => 
    ({
        ...prev, [e.target.id] : e.target.value
    }))
} 

const handleClick = async (e)=>{
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
        const res = await axios.post("/auth/register",credentials);
        dispatch ({type:"LOGIN_SUCCESS",payload : res.data})
        navigate("/");
    }catch(err){
      dispatch({type:"LOGIN_FAIL", payload:err.response.data})
    }
}
console.log(user)







  return (
    <div>
<body>
      
      <div className="login">
        <Navbar/>
          <div className="lcontainer">
          <h1 id="title">Sign up</h1>
          <div class="box">
          <FontAwesomeIcon icon={faUser}  className="i"/>
              <input type="text" placeholder="username" id="username"  onChange={handleChange} className="linput" />
              </div>
              <div class="box">
           <FontAwesomeIcon icon={faEnvelope}  className="i"/>
              <input type="text" placeholder="email" id="email"  onChange={handleChange} className="linput" />
              </div>
              <div class="box">
              <FontAwesomeIcon icon={faLock} className="i"/>
              <input type="password" placeholder="password" id="password" onChange={handleChange} className="linput" />
              </div>
              
             
            
              <p>Already have an account?<a href="#">  <Link to = "/login">
          <button className="navButton">Sign In
          </button>

          </Link></a></p>

           <button disabled={loading} onClick={handleClick} type="submit" className="lbtn">Sign up</button>
           {
              error && 
              <span>{error.message}</span>
           }
           
            
          </div>
      </div>
      </body>
    </div>
  )
}

export default Register