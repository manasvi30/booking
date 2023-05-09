import { useState } from "react"
import "./mailList.css"
import emailjs from '@emailjs/browser';

const MailList = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const sendEmail = (e) =>{
    e.preventDefault();
      var data = {name:name,email:email};
      emailjs.send('service_gu9alfs', 'template_l1ruk9g', data, 'zcO8Y8nj6DaDcgNyG')
      .then((result) => {
          alert("registered succesfully");
      }, (error) => {
          console.log(error.text);
      });
  

      console.log("email sent");
      setEmail("");
      setName("");
    };
  return (
    <div className="mail">
      <form onSubmit={sendEmail} className="form-style">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
      <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)} }/>
        <input type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
        <button type="submit" className="btn-submit">Subscribe</button>
      </div>
      </form>
    </div>
  )
}

export default MailList