import React,{ useState } from "react";

  import { Link } from "react-router-dom";
import "./searchItem.css";
import useFetch from "../../hooks/useFetch"

const SearchItem = ({item}) => {
  const images = [
    "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3124079/pexels-photo-3124079.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6127022/pexels-photo-6127022.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1441058/pexels-photo-1441058.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2957461/pexels-photo-2957461.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2096983/pexels-photo-2096983.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://www.pexels.com/photo/black-mattress-in-front-of-a-large-window-behind-a-mountain-775219/",
    "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3717517/pexels-photo-3717517.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15062294/pexels-photo-15062294.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1580112/pexels-photo-1580112.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/381541/pexels-photo-381541.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1560065/pexels-photo-1560065.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const {data , loading, error} = useFetch("/hotels/countByType");
  console.log(data);

  const [randomImageIndex, setRandomImageIndex] = useState(getRandomImageIndex());

  function getRandomImageIndex() {
    return Math.floor(Math.random() * images.length);
  }

  return (
    <div className="searchItem">
      <div className="prop">
        {loading ? ("loading") : (
          <>
            {data &&
              <div className="propi" key={1}>
                <img
                  src= {images[randomImageIndex]}
                  alt=""
                  className="pImg"
                />
              </div>
            }
          </>
        )}
      </div>
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {item.desc}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        { item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div> }
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestprice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`} >
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
