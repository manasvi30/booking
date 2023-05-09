import React from 'react'
import "./berlin.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";





const Berlin = () => {
  return (
    <body>
      <Navbar/>
      
    <div className='Berlin'>
        <h2>Berlin</h2>

        <h3 className='red'>Disclaimer: This is only to give you deetails about hotels. You can't reserve from this page.</h3>
        <div className='one'>
            <h3>All hotels in Berlin</h3>
            <div className="yo">
                <div className="first">
                  
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    
                    <p>
                    <h4>Hotel Tropica</h4>
                      Offering river views, Locke at East Side Gallery is an accommodation located in Berlin, 500 m from East Side Gallery and 2.5 km from Alexanderplatz Underground Station. Among the facilities at this property are a 24-hour front desk and a lift, along with free WiFi throughout the property. The apartment features facilities for disabled guests.
                        The apartment complex will provide guests with air-conditioned units with a wardrobe, a kettle, an oven, a microwave, a safety deposit box, a flat-screen TV and a private bathroom with a shower. Some units also have a well-fitted kitchen equipped with a dishwasher. At the apartment complex, all units come with bed linen and towels.

                        Alexanderplatz is 3 km from the apartment, while Berlin Cathedral is 3.3 km away. The nearest airport is Berlin Brandenburg Willy Brandt Airport, 19 km from Locke at East Side Gallery.</p>
                        </div>                 
                </div>
                <div className="second">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>HYAT Hotel</h4>
                      Just a 10-minute walk from Berlin Central Station, this hostel offers modern rooms, a 24-hour reception, and daily buffet breakfasts. On-site parking is available.
                          Located in a quiet side street, the family-friendly a&o Berlin Hauptbahnhof has brightly decorated rooms with a private bathroom. WiFi is free in all rooms as well as in the lobby.

                          Varied dinners are prepared at the a&o Berlin Hauptbahnhof on request. The a&o’s lobby bar invites guests to relax with a drink.</p>
                          </div>
                </div>
                <div className="third">
                    
                    <div className="join">
                    <p>
                    <img src="https://images.pexels.com/photos/6127022/pexels-photo-6127022.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="pic" />
                    </p>
                    <p><h4>Hotel Alexandria</h4>
                      This design hotel in Berlin's Tiergarten district is a 5-minute walk from the KaDeWe department store. Motel One Tiergarten offers free Wi-Fi and stylish rooms with a flat-screen TV and a mobile desk.
                          The air-conditioned rooms at the Motel One Berlin-Tiergarten feature distinctive light-blue decor and wooden floors. All rooms include a modern bathroom with granite and a mosaic design.

                          The Motel One Berlin-Tiergarten's elegant One Lounge includes designer furniture. Snacks and drinks are served here 24 hours a day.

                          Wittenbergplatz Underground Station is a 5-minute walk from the Motel One. Bus 100 also stops nearby, offering direct connections to the Reichstag parliament and Alexanderplatz square.</p>
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

export default Berlin