import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Head from "../../components/head/Head";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

import "./about.css"


import one from "../about/one.jpg"
import two from "../about/two.jpg"
import three from "../about/three.jpg"



const About = () => {
  return (
    <div>
       <Navbar />
       <Head />
      

    <div className="services">
        <div className="title">
           
            <h3> <span>About</span> us</h3>
           <div className="new">
                <p>
                
                We allow users to search for and book hotel accommodations online.
                We offer a wide variety of options
                for users to choose from, including different types of rooms, amenities, and prices.
                </p>
                <p>
                  <img src = {one} type="image/jpg"></img>
                </p>
                </div> 

                <div className="new">   
                <p>
                <img src = {two} type="image/jpg"></img>
                </p>
                
                <p>
                  <p>
                Our website offers a convenient and efficient way to search for and book accommodations online. 
                </p>
                <p></p>
                <p></p>
                <p>
                You can search for hotels based on their preferred location, dates of stay, budget, and
                other criteria. Our website will then display a list of available hotels that match your
                  search criteria. You can then compare the prices and features of the different 
                  hotels, read reviews from other guests, and make a reservation online.
                  </p>
                </p>
                </div>
                <div className="new">
                <p>
                Overall, Our websites provides a valuable service to both travelers
                 and hotel owners/managers, making it easy for
                 travelers to find and book accommodations, while helping our hotels to fill rooms more effectively. 
                </p>
                <p><img src = {three} type="image/jpg"></img></p>

                <p>With the convenience and efficiency of online booking, our website have become 
                  an essential part of the travel industry,
                   providing a seamless experience for users and a powerful marketing platform for hotels</p>
                </div>
               
           

                    
          </div>

          

            
        </div>
        <Footer />
          <MailList/>
        </div>
        
        
    
      
       
    
    
  )
}

export default About