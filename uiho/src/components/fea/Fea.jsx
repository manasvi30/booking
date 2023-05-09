import React from 'react'
import useFetch from "../../hooks/useFetch"
import "./fea.css";

const Fea = () =>{
  
    const {data , loading, error} = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
    
    return (
      <div className="featured">
       {loading ? ("loading please wait" ):
       ( <> <div className="featuredItem">
          <img
            src="https://images.pexels.com/photos/3460599/pexels-photo-3460599.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Hotel Alexandria</h1>
            <h2> Madrid</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
          <h1>Hotel Maria</h1>
            <h2>Madrid</h2>
          </div>
        </div>

        <div className="featuredItem">
          <img
            src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
          <h1>Hotel Atlas</h1>
            <h2>Madrid</h2>
          </div>
        </div>


        <div className="featuredItem">
          <img
            src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Hotel Rowen</h1>
            <h2>London</h2>
          </div>
        </div></>)}
      </div>
    );
  };
  
export default Fea