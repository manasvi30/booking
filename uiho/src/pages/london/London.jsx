import React from 'react'

import "./london.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";

import { Link } from 'react-router-dom';

const London = () => {
  return (
    <body>
      <Navbar/>
      
    <div className='London'>
        <h2>London</h2>

        <h3 className='red'>Disclaimer: This is only to give you deetails about hotels. You can't reserve from this page.</h3>
        <div className='one'>
            <h3>All hotels in London</h3>
            <div className="yo">
                <div className="first">
                  
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    
                    <p>
                    <h4>Hotel Clan</h4>
                    A few minutes' walk from Paddington Station and near to Hyde Park and Madame Tussauds, this Victorian listed building is a small, family-run hotel offering bed and breakfast.
Belvedere Hotel overlooks a picturesque square and offers a hearty breakfast to start the day.

The hotel is convenient for Buckingham Palace, Kensington Palace, Portobello Market and the Royal Albert Hall. Staff can assist in organising sightseeing tours of London, and can offer maps and information on tourist attractions.</p>
                        </div>                 
                </div>
                <div className="second">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>Hotel Lavida</h4>
                    Set in London, 400 m from King's Cross Station, Argyle Square Hotel features rooms with city views and free WiFi. The property is located 2.5 km from Dominion Theatre, 2.6 km from Tottenham Court Road and 3 km from Royal Opera House. The property is 200 m from King's Cross St Pancras, and within 2.6 km of the city centre.
At the hotel, every room is fitted with a desk and a flat-screen TV. At Argyle Square Hotel all rooms include bed linen and towels.

The accommodation can conveniently provide information at the reception to help guests to get around the area.</p>
                          </div>
                </div>
                <div className="third">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    
                    <p><h4>Hotel Alpha</h4>
                    5-minute walk from Earl's Court Tube Station. Each room has a microwave and fridge.
The comfortable rooms have en suite facilities, tea/coffee and a TV. Wi-Fi internet access is available throughout the building.

A continental breakfast is available to guests each morning, and St. Mark also features a relaxing lounge and a 24-hour front desk.

The hotel is situated in Earl's Court, close to many restaurants and shops. The Olympia Exhibition Centre is within walking distance of the hotel.</p>
  </div>
                  </div>
                  <div className="fourth">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>Hotel Domino</h4>
                    Only 500 m from central London's leafy Hyde Park, Alexandra Hotel offers a 24-hour front desk. This Victorian townhouse is just 5 minutes’ walk from Paddington Railway Station. Alexandra Hotel is a 15-minute walk from the lively shopping of Oxford Street.
Traditionally decorated, the rooms includes a TV, telephone, and tea and coffee making facilities. Each room benefits from a private bathroom with a hairdryer.</p>
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

export default London