import "../styles/RestaurantCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist } from "./WishlistContext";

const RestaurantCard = ({ resData }) => {

  const {
    name,
    img,
    avgRating,
    cuisines = [],
    deliveryTime,
  } = resData?.data || {};

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const restaurantId = resData?.data?.id;

  const isFavorite = isInWishlist(restaurantId);

  const handleWishlistClick = (e) => {
    // Prevent restaurant Link from opening
    e.preventDefault();
    e.stopPropagation();

    toggleWishlist(resData);
  };

  return (
    <div className="res-card">

      {/* ================================
          RESTAURANT IMAGE
      ================================= */}

      <div className="res-image-container">

        <img
          className="res-logo"
          src={img?.[0]}
          alt={name}
        />

        {/* Wishlist Button */}

        <button
          className={`wishlist-btn ${
            isFavorite ? "wishlist-active" : ""
          }`}
          onClick={handleWishlistClick}
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>

      </div>


      {/* ================================
          RESTAURANT CONTENT
      ================================= */}

      <div className="res-content">

        <h3 className="res-name">
          {name}
        </h3>

        <p className="cuisines">
          {cuisines.join(", ")}
        </p>

        <div className="res-info">

          <span className="rating">
            ★ {avgRating}
          </span>

          <span className="time">
            🕐 {deliveryTime} min
          </span>

        </div>

      </div>

    </div>
  );
};

export default RestaurantCard;