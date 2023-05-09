import React from 'react'

import "./madrid.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

const Madrid = () => {
  return (
    <body>
      <Navbar/>
      
    <div className='Madrid'>
        <h2>Madrid</h2>

        <h3 className='red'>Disclaimer: This is only to give you deetails about hotels. You can't reserve from this page.</h3>
        <div className='one'>
            <h3>All hotels in Madrid</h3>
            <div className="yo">
                <div className="first">
                  
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    
                    <p>
                    <h4>Hotel Amigo</h4>
                    Housed in a magnificent building on the famous Gran Vía in the centre of Madrid, this charming guest house is perfect accommodation for visiting this lively capital city.
From Hostal Valencia Madrid you can stroll to many of the top sights of Madrid, including the Puerta del Sol, Plaza Mayor and the Palacio Real. The renowned museum district is also within walking distance of this guest house.</p>
                        </div>                 
                </div>
                <div className="second">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>Hotel Naranja</h4>
                    Set on Gran Vía and just 50 m from Plaza de España Metro Station, El Rincón de Gran Vía offers attractive rooms with free WiFi. It features a 24-hour reception.
All spacious, air-conditioned rooms at El Rincón de Gran Vía have wooden floors. They have satellite TV, a minibar, and tea and coffee making facilities.

A range of bars, cafés and restaurants surround the guest house. The popular Puerta del Sol is approximately 10 minutes' walk away.</p>
                          </div>
                </div>
                <div className="third">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>Hotel Diablo</h4>
                    Featuring free Wi-Fi, Ibis Budget Madrid Centro Las Ventas is located 750 m from Plaza de las Ventas and its bull ring. This modern hotel offers air-conditioned rooms and a buffet breakfast.
Each room has a flat-screen TV, featuring national and international channels, as well as free Wi-Fi. There is a private bathroom with a shower and a separate toilet.

Puerta del Sol Square and famous museums, including the Prado Art Museum and Reina Sofia Museum, are 10 minutes away by metro. El Carmen Metro Station is 400 m from the hotel.</p>
                          </div>
                  </div>
                
                
            </div>

        </div>
    </div>
    <MailList/>
    <Footer />
          
    </body>
  )
}

export default Madrid
