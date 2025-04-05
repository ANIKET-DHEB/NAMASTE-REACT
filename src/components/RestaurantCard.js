import { CDN_URL } from "../utils/constants";
const RestaurantCard =(props) =>{
const {resData} = (props)
    const {
        name,
        img,
        avgRating,
        cuisines =[],
        // costForTwo,
        deliveryTime,
    }=resData?.data;
    
return(
 <div className="res-container">
    <div className="res-card" style={{backgroundColor:"rgb(225 225 225)"}}>
        <img className="res-logo" src={img [0]} alt={name} />
      
       <h3 className="res-name">{name}</h3>
       <h4 className="cuisins">{cuisines .join(" ,")}</h4>
       <h4 className="rating">{avgRating} Stars</h4>
       {/* <h4 className="price">₹ {costForTwo} </h4> */}
       <h4 className="time">{deliveryTime} Minutes</h4>

     
    </div>
    </div>
)
}

export default RestaurantCard;



