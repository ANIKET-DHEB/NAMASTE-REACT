import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Body.css";

const Body = () => {
  const [listOfRestaurants] = useState([
    {
      data: {
        id: "258962",
        img: [
          "https://b.zmtcdn.com/data/pictures/chains/7/37327/24697b617bb8aaf5b1c7df9a7074a662.jpg?output-format=webp"
        ],
        name: "KFC",
        cuisines: ["Burgers", "Snacks", "Fast Food"],
        costForTwo: 450,
        deliveryTime: 30,
        avgRating: 4.5,
      },
    },

    {
      data: {
        id: "258963",
        img: [
          "https://b.zmtcdn.com/data/pictures/8/20084258/cf3834795756d6c590e624d78b037ff8_o2_featured_v2.jpg?output-format=webp"
        ],
        name: "McDonald's",
        cuisines: ["Burgers", "Fries", "Soft Drinks"],
        costForTwo: 500,
        deliveryTime: 25,
        avgRating: 4.3,
      },
    },

    {
      data: {
        id: "258964",
        img: [
          "https://b.zmtcdn.com/data/pictures/chains/4/35004/e836548b1e1fabc0ac00ecc79ac519c4.jpg?output-format=webp"
        ],
        name: "Subway",
        cuisines: ["Sandwiches", "Salads", "Healthy Food"],
        costForTwo: 200,
        deliveryTime: 20,
        avgRating: 4.2,
      },
    },

    {
      data: {
        id: "258965",
        img: [
          "https://b.zmtcdn.com/data/dish_photos/d41/9836679f7c71971586f68ce8815bad41.jpeg?output-format=webp"
        ],
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
        img: [
          "https://images.unsplash.com/photo-1637290742802-3c8a0f5bd49b?w=800&auto=format&fit=crop&q=80"
        ],
        name: "Starbucks",
        cuisines: ["Coffee", "Beverages", "Snacks"],
        costForTwo: 800,
        deliveryTime: 15,
        avgRating: 4.4,
      },
    },

    {
      data: {
        id: "258967",
        img: [
          "https://b.zmtcdn.com/data/pictures/chains/1/49781/5f22edaa3391108ad75776b4cbce296e.jpg?output-format=webp"
        ],
        name: "Burger King",
        cuisines: ["Burgers", "Fast Food"],
        costForTwo: 400,
        deliveryTime: 28,
        avgRating: 4.1,
      },
    },

    {
      data: {
        id: "258968",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/25482e01-16a4-41ba-bad6-cafbb3ce2a2a_89517.jpg"
        ],
        name: "Pizza Hut",
        cuisines: ["Pizza", "Fast Food"],
        costForTwo: 450,
        deliveryTime: 28,
        avgRating: 4.6,
      },
    },

    {
      data: {
        id: "258969",
        img: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaqnFNQ0uQQXhKxwNSwjt8HxHtKexxjUNXwLNTFJfCco4d6yOwbeNM7b6FJg&s"
        ],
        name: "Baba Falooda",
        cuisines: ["Ice Cream", "Falooda"],
        costForTwo: 250,
        deliveryTime: 28,
        avgRating: 4.3,
      },
    },

    {
      data: {
        id: "258970",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yohxcwe5qzoipdexfkd6"
        ],
        name: "Amritsari Hotel",
        cuisines: ["Kulcha", "Sweets"],
        costForTwo: 650,
        deliveryTime: 40,
        avgRating: 4.7,
      },
    },

    {
      data: {
        id: "258971",
        img: [
          "https://media.istockphoto.com/id/494537130/photo/turkey-dinner.jpg?s=612x612&w=0&k=20&c=1HNNU37fGtqicdVRu1WWFSSbBJuIaggz9iNhQGgQrQs="
        ],
        name: "Shalimar Hotel",
        cuisines: ["Chicken", "Tandoori Chicken"],
        costForTwo: 550,
        deliveryTime: 20,
        avgRating: 4.2,
      },
    },

    {
      data: {
        id: "258972",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s1gopxoynvc0xlc3liyb"
        ],
        name: "Mani's Cafe",
        cuisines: ["South Indian", "Snacks"],
        costForTwo: 200,
        deliveryTime: 10,
        avgRating: 4.3,
      },
    },

    {
      data: {
        id: "258973",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2d460775c6195971e0da85227b12bf63"
        ],
        name: "Cafe Saheen",
        cuisines: ["Biryani", "Tandoori Chicken"],
        costForTwo: 350,
        deliveryTime: 15,
        avgRating: 4.4,
      },
    },

    {
      data: {
        id: "258974",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/1abfebf254041f8cc9545f76c127853a"
        ],
        name: "Merwans Cake Stop",
        cuisines: ["Cakes", "Desserts"],
        costForTwo: 500,
        deliveryTime: 25,
        avgRating: 4.7,
      },
    },

    {
      data: {
        id: "258975",
        img: [
          "https://media.istockphoto.com/id/1488738018/photo/medu-vada-or-medu-vada-with-sambhar-and-coconut-chutney-red-chutney-green-chutney-popular.jpg?s=612x612&w=0&k=20&c=dvWgKhQuw1lfOBxDpR6YFMLSZnWdyqYGV1pvcBt7mZw="
        ],
        name: "Hotel Sai Pooja",
        cuisines: ["South Indian", "Medu Vada"],
        costForTwo: 500,
        deliveryTime: 30,
        avgRating: 4.2,
      },
    },

    {
      data: {
        id: "258976",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e97b4e0f50bad707377494e68365cd23"
        ],
        name: "Amritsari Punjabi Paratha",
        cuisines: ["Paratha", "Punjabi"],
        costForTwo: 150,
        deliveryTime: 10,
        avgRating: 4.0,
      },
    },

    {
      data: {
        id: "258977",
        img: [
          "https://images.unsplash.com/photo-1612203985729-70726954388c?w=800&auto=format&fit=crop&q=80"
        ],
        name: "Beles Sweets",
        cuisines: ["Desserts", "Chaat"],
        costForTwo: 150,
        deliveryTime: 30,
        avgRating: 4.1,
      },
    },

    {
      data: {
        id: "258978",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/4a4b778cea5d3c2821babc5be8e120c9"
        ],
        name: "Raju Ki Chai",
        cuisines: ["Beverages", "Snacks"],
        costForTwo: 350,
        deliveryTime: 30,
        avgRating: 4.2,
      },
    },

    {
      data: {
        id: "258979",
        img: [
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/661cc0d4-dad2-4392-be62-e3082bf9d7f5_253219.jpg"
        ],
        name: "LunchBox",
        cuisines: ["North Indian", "Thalis"],
        costForTwo: 250,
        deliveryTime: 15,
        avgRating: 4.0,
      },
    },

    {
      data: {
        id: "258980",
        img: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDLZev3opynk0znb9efI6XE_CDpQPgp2YM_A&s"
        ],
        name: "Bayroute",
        cuisines: ["Middle Eastern", "Arabian"],
        costForTwo: 750,
        deliveryTime: 25,
        avgRating: 4.6,
      },
    },

    {
      data: {
        id: "258981",
        img: [
          "https://b.zmtcdn.com/data/dish_photos/28a/0cdf5ecf0eb255cc55e576bfc90d228a.jpeg"
        ],
        name: "Harvest Salad Co",
        cuisines: ["Salad", "Panini", "Healthy Food"],
        costForTwo: 279,
        deliveryTime: 20,
        avgRating: 4.3,
      },
    },

    {
      data: {
        id: "258982",
        img: [
          "https://b.zmtcdn.com/data/dish_photos/d2a/c3599a16eb812214aaabd91a7b08ed2a.jpeg"
        ],
        name: "Chaayos",
        cuisines: ["Tea", "North Indian", "Fast Food"],
        costForTwo: 175,
        deliveryTime: 35,
        avgRating: 4.1,
      },
    },

    {
      data: {
        id: "258983",
        img: [
          "https://b.zmtcdn.com/data/brand_creatives/logos/44dbee83e16629d2b60ec4ad60f45c03_1736510529.png?output-format=webp"
        ],
        name: "Natural Ice Cream",
        cuisines: ["Ice Cream", "Desserts"],
        costForTwo: 150,
        deliveryTime: 20,
        avgRating: 4.5,
      },
    },

    {
      data: {
        id: "258984",
        img: [
          "https://b.zmtcdn.com/data/pictures/6/37756/097ee877f458c23fe0bd5f95c5c881b3_o2_featured_v2.jpg"
        ],
        name: "Mithiyaj",
        cuisines: ["Sweets", "Desserts"],
        costForTwo: 250,
        deliveryTime: 15,
        avgRating: 4.2,
      },
    },

    {
      data: {
        id: "258985",
        img: [
          "https://b.zmtcdn.com/data/brand_creatives/logos/ff18abbc75ed02b00b608e97344a661f_1712855475.png?output-format=webp"
        ],
        name: "Tewari Bros.",
        cuisines: ["Mithai", "Street Food", "Fast Food"],
        costForTwo: 280,
        deliveryTime: 25,
        avgRating: 4.1,
      },
    },

    {
      data: {
        id: "258986",
        img: [
          "https://b.zmtcdn.com/data/dish_photos/12a/62a3b8c3a3318fb9cef61c12c8d9612a.jpeg"
        ],
        name: "Persian Darbar",
        cuisines: ["Chinese", "Biryani"],
        costForTwo: 395,
        deliveryTime: 19,
        avgRating: 4.4,
      },
    },
  ]);

  const [filteredRestaurant, setFilteredRestaurant] =
    useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");

  const searchRestaurants = () => {
    const search = searchText.toLowerCase().trim();

    if (!search) {
      setFilteredRestaurant(listOfRestaurants);
      return;
    }

    const filtered = listOfRestaurants.filter((res) => {
      const restaurantName = res.data.name.toLowerCase();

      const cuisines = res.data.cuisines
        .join(" ")
        .toLowerCase();

      return (
        restaurantName.includes(search) ||
        cuisines.includes(search)
      );
    });

    setFilteredRestaurant(filtered);
  };

  const showTopRated = () => {
    const filtered = listOfRestaurants.filter(
      (res) => res.data.avgRating >= 4.3
    );

    setFilteredRestaurant(filtered);
  };

  const showAllRestaurants = () => {
    setFilteredRestaurant(listOfRestaurants);
  };

  return (
    <main className="body">

      {/* Hero Section */}
      <section className="food-hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">
            🍽️ Delicious food, delivered fast
          </span>

          <h1>
            Your cravings.
            <br />
            <span>Our priority.</span>
          </h1>

          <p>
            Discover the best restaurants and delicious dishes
            around Mumbai.
          </p>

          <div className="hero-search">

            <span className="search-icon">⌕</span>

            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchRestaurants();
                }
              }}
              placeholder="Search restaurants, food or cuisine..."
            />

            <button onClick={searchRestaurants}>
              Search
            </button>

          </div>
        </div>

      </section>

      {/* Category Section */}
      <section className="category-section">

        <div className="section-heading">
          <div>
            <span className="small-heading">EXPLORE</span>
            <h2>What are you craving?</h2>
          </div>

          <button
            className="view-all-btn"
            onClick={showAllRestaurants}
          >
            View All →
          </button>
        </div>

        <div className="category-list">

          <button
            onClick={() => {
              setSearchText("Pizza");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("pizza")
                )
              );
            }}
            className="category-card"
          >
            <span>🍕</span>
            <p>Pizza</p>
          </button>

          <button
            onClick={() => {
              setSearchText("Burger");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("burger")
                )
              );
            }}
            className="category-card"
          >
            <span>🍔</span>
            <p>Burgers</p>
          </button>

          <button
            onClick={() => {
              setSearchText("Biryani");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("biryani")
                )
              );
            }}
            className="category-card"
          >
            <span>🍛</span>
            <p>Biryani</p>
          </button>

          <button
            onClick={() => {
              setSearchText("Desserts");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("dessert")
                )
              );
            }}
            className="category-card"
          >
            <span>🍰</span>
            <p>Desserts</p>
          </button>

          <button
            onClick={() => {
              setSearchText("Coffee");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("coffee")
                )
              );
            }}
            className="category-card"
          >
            <span>☕</span>
            <p>Coffee</p>
          </button>

          <button
            onClick={() => {
              setSearchText("South Indian");
              setFilteredRestaurant(
                listOfRestaurants.filter((res) =>
                  res.data.cuisines
                    .join(" ")
                    .toLowerCase()
                    .includes("south indian")
                )
              );
            }}
            className="category-card"
          >
            <span>🥘</span>
            <p>South Indian</p>
          </button>

        </div>

      </section>

      {/* Restaurant Section */}
      <section className="restaurant-section">

        <div className="restaurant-heading">

          <div>
            <span className="small-heading">
              TOP RESTAURANTS
            </span>

            <h2>Popular near you</h2>

            <p>
              Explore restaurants loved by foodies in Mumbai.
            </p>
          </div>

          <button
            className="top-rated-btn"
            onClick={showTopRated}
          >
            ⭐ Top Rated
          </button>

        </div>

        <div className="res-container">

          {filteredRestaurant.length === 0 ? (
            <div className="no-results">
              <div>🍽️</div>
              <h2>No restaurants found</h2>
              <p>
                Try searching for another restaurant or cuisine.
              </p>

              <button onClick={showAllRestaurants}>
                Show All Restaurants
              </button>
            </div>
          ) : (
            filteredRestaurant.map((restaurant) => (

              <Link
                key={restaurant.data.id}
                to={"/restaurant/" + restaurant.data.id}
                className="restaurant-link"
              >

                <RestaurantCard
                  resData={restaurant}
                />

              </Link>

            ))
          )}

        </div>

      </section>

    </main>
  );
};

export default Body;