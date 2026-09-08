import "../styles/RestaurantCard.css";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    img,
    avgRating,
    cuisines = [],
    deliveryTime,
  } = resData?.data || {};

  return (
    <div className="res-card">

      <div className="res-image-container">
        <img
          className="res-logo"
          src={img?.[0]}
          alt={name}
        />

        
      </div>

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