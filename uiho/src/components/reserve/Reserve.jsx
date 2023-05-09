import "./reserve.css"
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "../../hooks/useFetch"
import { useState } from "react";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import {  useNavigate } from "react-router-dom";
import axios from "axios";




const Reserve = ({setOpen,hotelId}) => {
  const [selectedRooms,setselectedRooms] = useState([])
  const {data,loading,error}  = useFetch(`/hotels/room/${hotelId}`);
  const {date} = useContext(SearchContext);

  const getDatesInRange = (startDate,endDate) => {

    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());
    const dates = [];

    while (date <= end){
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate()+1);
    }
     return dates;
  };
 const alldates = getDatesInRange(date[0].startDate,date[0].endDate);

 const isAvailable = (roomnumber) =>{
  const isFound = roomnumber.unavalailableDates.some((date) =>
  alldates.includes(new Date(date).getTime())
  );
  return !isFound
 }

  const handleSelect = (e) =>{
    const checked = e.target.checked;
    const value = e.target.value;
    setselectedRooms(
      checked ? [...selectedRooms,value] : selectedRooms.filter((item)=> item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () =>{
    try{
      await  Promise.all(selectedRooms.map((roomId)=>{
        const res = axios.put(`/room/availability/${roomId}`,{date: alldates,});
        return res.data;
      }));
      setOpen(false);
      navigate("/");
    }catch(err){

    }

  }


  console.log(selectedRooms);
  return (
    <div className="reserve">
      <div className="reservecontainer">
      <FontAwesomeIcon icon={faCircleXmark}  className="rclose" onClick={()=>
        setOpen(false)}/>
        <span>select your rooms:</span>
        {data.map(item=>(
          <div className="ritem">
            <div className="riteminfo">
              <div className="rtittle">{item.tittle}</div>
              <div className="rdesc">{item.desc}</div>
              <div className="rmax"> Max people : <b>{item.maxPeople}</b></div>
            </div>
            <div className="rprice">{item.price}</div>
            <div className="rselectrooms">
            {item.roomnumbers.map((roomnumber)=>(
             <div className="room">
              <label>{roomnumber.number}</label>
              <input type="checkbox" value={roomnumber._id} onChange={handleSelect} 
               disabled = {!isAvailable(roomnumber)}
               />
             </div>
            ))}
            </div>
        
         
         
          </div>
        ))}
        <button onClick={handleClick} className="rbtn">reserve now!</button>
      </div>
    </div>
  )
}

export default Reserve