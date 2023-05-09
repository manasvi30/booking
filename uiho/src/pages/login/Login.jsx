import Google from "../login/google.png"


import { useContext, useEffect, useState } from "react"
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom"
import {
    
    faLock,
    
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login.css"



import axios from "axios"
import { AuthContext } from "../../context/AuthContext"
import {useNavigate} from "react-router-dom"

const Login = () => {
    
    
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };
   

    const [credentials , setCredentials] = useState({
        username: undefined,
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
            const res = await axios.post("/auth/login",credentials);
            dispatch ({type:"LOGIN_SUCCESS",payload : res.data})
            navigate("/");
        }catch(err){
          dispatch({type:"LOGIN_FAIL", payload:err.response.data})
        }
    }
    console.log(user)

  return (
    <body>
      
    <div className="login">
    <Navbar/>
        <div className="lcontainer">
          
        <h1 className="log" id="title">Login</h1>
        <div class="box">
        <FontAwesomeIcon icon={faUser}  className="i"/>
            <input type="text" placeholder="username" id="username"  onChange={handleChange} className="linput" />
            </div>
            <div class="box">
            <FontAwesomeIcon icon={faLock} className="i"/>
            <input type="password" placeholder="password" id="password" onChange={handleChange} className="linput" />
            </div>
            <p>Don't have an account?<a href="#">  <Link to = "/register">
          <button className="navButton">Sign Up
          </button>
          </Link></a></p>
         <button disabled={loading} onClick={handleClick} className="lbtn">log in</button>
         {
            error && 
            <span>{error.message}</span>
         }
            <div className="or">  OR</div>
            
                <div className="loginButton google" onClick={google}>
                    <img src={Google} alt="" className="icon" />
                    Google
                </div>
                
             
           
             
             
           
      

        </div>
    </div>
    </body>
  )
}

export default Login