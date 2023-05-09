
import React from 'react'
import {
    faBed,
    faCalendarDays,
    
    faPerson,
    
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import "./head.css";
  
  

const Head = (type) => {
   
  
  return (
    
   
    
       
      
          <div className="header">
            <div
              className={
                type === "list" ? "headerContainer listMode" : "headerContainer"
              }
            >
              <div className="headerList">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
                </div>
              </div>
              {type !== "list" && (
                <div>
                  <h1 className="headerTitle">
                  Experience the world your way, with the help of a hotel reservation website.
                  </h1>
                
                 
                 
                    
                      
                   
                                -
                             
                            </div>
                        
              )}
            </div>
        </div>
      
      
  )
}

export default Head