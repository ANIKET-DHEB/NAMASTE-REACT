import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "258962",
        img: ["https://b.zmtcdn.com/data/pictures/chains/7/37327/24697b617bb8aaf5b1c7df9a7074a662.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        name: "KFC",
        cuisines: ["Burgers","Snacks", "Fast Food"],
        // costForTwo: 1000,
        deliveryTime: 30,
        avgRating: 4.5,
      },
    },
    {
      data: {
        id: "258963",
        img :["https://b.zmtcdn.com/data/pictures/8/20084258/cf3834795756d6c590e624d78b037ff8_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
        name: "McDonald's",
        cuisines: ["Burgers", "Fries", "Soft Drinks"],
        costForTwo: 500,
        deliveryTime: 25,
        avgRating: 3.5,
      },
    },
      {
        data: {
          id: "258964",
          img:["https://b.zmtcdn.com/data/pictures/chains/4/35004/e836548b1e1fabc0ac00ecc79ac519c4.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
          name: "Subway",
          cuisines: ["Sandwiches" ,  "Salads" ,  "Healthy Food"],
          costForTwo: 200,
          deliveryTime: 20,
          avgRating: 4.2,
        },
      },
      {
        data: {
          id: "258965",
          img:["https://b.zmtcdn.com/data/dish_photos/d41/9836679f7c71971586f68ce8815bad41.jpeg?output-format=webp"],
          name: "Domino's Pizza",
          cuisines: ["Pizza", "Fast Food"],
          costForTwo: 300,
          deliveryTime: 35,
          avgRating: 4.9,
        },
      },
      {
        data: {
          id: "258966",
          img:["https://images.unsplash.com/photo-1637290742802-3c8a0f5bd49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcmJ1a3N8ZW58MHx8MHx8fDA%3D"],
          name: "Starbucks",
          cuisines: ["Coffee", "Beverages", "Snacks"],
          costForTwo: 800,
          deliveryTime: 15,
          avgRating: 3.7,
        },
      },
      {
        data: {
          id: "258967",
          img:["https://b.zmtcdn.com/data/pictures/chains/1/49781/5f22edaa3391108ad75776b4cbce296e.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*"],
          name: "Burger King",
          cuisines: ["Burgers", "Fast Food"],
          costForTwo: 400,
          deliveryTime: 28,
          avgRating: 3.9,
        },
      },
      {
        data: {
          id: "258968",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/25482e01-16a4-41ba-bad6-cafbb3ce2a2a_89517.jpg"],
          name: "Pizza Hut",
          cuisines: ["Pizza", "Fast Food"],
          costForTwo: 450,
          deliveryTime: 28,
          avgRating:4.6,
        },
      },
      {
        data: {
          id: "258969",
          img:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqnFNQ0uQQXhKxwNSwjt8HxHtKexxjUNXwLNTFJfCco4d6yOwbeNM7b6FJg&s"],
          name: "Baba Falooda",
          cuisines: ["Ice Cream", "Falooda"],
          costForTwo: 250,
          deliveryTime: 28,
          avgRating:3.3,
        },
      },
      {
        data: {
          id: "258970",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yohxcwe5qzoipdexfkd6"],
          name: "Amritsari Hotel",
          cuisines: ["Kulcha", "Sweets"],
          costForTwo:650,
          deliveryTime: 40,
          avgRating:4.7,
        },
      },
      {
        data: {
          id: "258971",
          img:["https://media.istockphoto.com/id/494537130/photo/turkey-dinner.jpg?s=612x612&w=0&k=20&c=1HNNU37fGtqicdVRu1WWFSSbBJuIaggz9iNhQGgQrQs="],
          name: "Shalimar Hotel",
          cuisines: ["Chicken", "Tandoori-Chicken"],
          costForTwo:550,
          deliveryTime: 20,
          avgRating:3.7,
        },
      },
      {
        data: {
          id: "258972",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s1gopxoynvc0xlc3liyb"],
          name: "Mani's Cafe",
          cuisines: ["South Indian,Snacks "],
          costForTwo:200,
          deliveryTime: 10,
          avgRating:4.3,
        },
      },
      {
        data: {
          id: "258973",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2d460775c6195971e0da85227b12bf63"],
          name: "Cafe Saheen",
          cuisines: ["Biryani", "Tandoori-Chicken"],
          costForTwo:350,
          deliveryTime: 15,
          avgRating:3.6,
        },
      },
      {
        data: {
          id: "258974",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/1abfebf254041f8cc9545f76c127853a"],
          name: "Merwans Cake Stop",
          cuisines: ["Cakes"],
          costForTwo:500,
          deliveryTime: 25,
          avgRating:4.7,
        },
      },
      {
        data: {
          id: "258975",
          img:["https://media.istockphoto.com/id/1488738018/photo/medu-vada-or-medu-vada-with-sambhar-and-coconut-chutney-red-chutney-green-chutney-popular.jpg?s=612x612&w=0&k=20&c=dvWgKhQuw1lfOBxDpR6YFMLSZnWdyqYGV1pvcBt7mZw="],
          name: "Hotel Sai Pooja",
          cuisines: ["South Indian,Medu Vada"],
          costForTwo:500,
          deliveryTime: 30,
          avgRating:3.9,
        },
      },
      {
        data: {
          id: "258976",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e97b4e0f50bad707377494e68365cd23"],
          name: "Amritsari Punjabi Paratha",
          cuisines: ["paratha,Punjabi"],
          costForTwo:150,
          deliveryTime:10,
          avgRating:4.0,
        },
      },
      {
        data: {
          id: "258977",
          img:["https://images.unsplash.com/photo-1612203985729-70726954388c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVzc2VydHN8ZW58MHx8MHx8fDA%3D"],
          name: "Beles Sweets",
          cuisines: ["Desserts, Chaat"],
          costForTwo:150,
          deliveryTime: 30,
          avgRating:4.1,
        },
      },
      {
        data: {
          id: "258978",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a4b778cea5d3c2821babc5be8e120c9"],
          name: "Raju Ki Chai",
          cuisines: ["Beverages,Snacks"],
          costForTwo:350,
          deliveryTime: 30,
          avgRating:3.5,
        },
      },
      {
        data: {
          id: "258979",
          img:["https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/661cc0d4-dad2-4392-be62-e3082bf9d7f5_253219.jpg"],
          name: "LunchBox - Meals and Thalis",
          cuisines: ["North Indian,Thalis"],
          costForTwo:250,
          deliveryTime:15,
          avgRating:3.6,
        },
      },
      {
        data: {
          id: "258980",
          img:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLZev3opynk0znb9efI6XE_CDpQPgp2YM_A&s"],
          name: "Bayroute",
          cuisines: ["Middle Eastern, Arabian"],
          costForTwo:750,
          deliveryTime:25,
          avgRating:4.6,
        },
      },
      {
        data: {
          id: "258981",
          img:["https://b.zmtcdn.com/data/dish_photos/28a/0cdf5ecf0eb255cc55e576bfc90d228a.jpeg"],
          name: "Harvest Salad Co",
          cuisines: ["Salad, Panini, Healthy Food"],
          costForTwo:279,
          deliveryTime:20,
          avgRating:3.9,
        },
      },
      {
        data: {
          id: "258982",
          img:["https://b.zmtcdn.com/data/dish_photos/d2a/c3599a16eb812214aaabd91a7b08ed2a.jpeg"],
          name: "Chaayos Chai+Snacks=Relax",
          cuisines: ["Tea, North Indian, Fast Food"],
          costForTwo:175,
          deliveryTime:35,
          avgRating:4.1,
        },
      },
      {
        data: {
          id: "258983",
          img:["https://b.zmtcdn.com/data/brand_creatives/logos/44dbee83e16629d2b60ec4ad60f45c03_1736510529.png?output-format=webp"],
          name: "Natural Ice Cream",
          cuisines: ["Ice Cream"],
          costForTwo:150,
          deliveryTime:20,
          avgRating:3.3,
        },
      },
      {
        data: {
          id: "258984",
          img:["https://b.zmtcdn.com/data/pictures/6/37756/097ee877f458c23fe0bd5f95c5c881b3_o2_featured_v2.jpg"],
          name: "Mithiyaj",
          cuisines: ["Sweets"],
          costForTwo:250,
          deliveryTime:15,
          avgRating:3.6,
        },
      },
      {
        data: {
          id: "258985",
          img:["https://b.zmtcdn.com/data/brand_creatives/logos/ff18abbc75ed02b00b608e97344a661f_1712855475.png?output-format=webp"],
          name: "Tewari Bros. Mithaiwala",
          cuisines: ["Mithai, Street Food, Fast Food"],
          costForTwo:280,
          deliveryTime:25,
          avgRating:4.1,
        },
      },
      {
        data: {
          id: "258986",
          img:["https://b.zmtcdn.com/data/dish_photos/12a/62a3b8c3a3318fb9cef61c12c8d9612a.jpeg"],
          name: "Persian Darbar",
          cuisines: ["Chinese, Biryani,"],
          costForTwo:395,
          deliveryTime:19,
          avgRating:3.9,
        },
      },
    ])
  const [filteredRestaurant,setFilteredRestaurant]= useState(listOfRestaurants);

  const [searchText,setSearchText] = useState("");

  return (
    <div className="body">
      <div className="filter">
        <div className="Search">
          
          <input 
             type="text" 
             className="search-box" 
             value={searchText} 
            onChange={(e) => setSearchText(e.target.value)} 
                placeholder="Search for restaurant,cuisine or a dish....." />

          <button className="searchbtn" onClick={()=>{
            const filteredRestaurant = listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())
          );
            setFilteredRestaurant(filteredRestaurant)
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
        <Link 
        key={restaurant.data.id} 
        to={"/restaurant/"+ restaurant.data.id}
        style={{ textDecoration: "none", color: "inherit" }}
        >
        
       <RestaurantCard resData={restaurant} />
       </Link>
        ))}
      </div>
    </div>
     
  );
};

export default Body;



