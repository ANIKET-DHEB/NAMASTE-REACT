import { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import { useCart } from "../components/CartContext";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { addToCart } = useCart();
    const [restaurant, setRestaurant] = useState({});
    const [quantity, setQuantity] = useState(0);
  
   
    const restaurantData = {
        "258962": { 
            name: "KFC", 
            dish: "Chicken Haleem (300 g)", 
            description: "(300 gms) Slow-cooked to perfection, our Chicken Haleem is a rich and flavorful dish...",
            price: 329,
            discount: 25,
            calories: 867,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/pictures/chains/7/37327/a6f9d24581cae5f83a6ea282ca018f62.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            discountCode: "ESBORNBLUE",
        },
        "258963": { 
            name: "McDonald's", 
            dish: " Beverages", 
            description: "Feel the crunch with Crispy Veggie Burger+ McVeggie + Fries (M) ....",
            price: 299,
            discount: 25,
            calories: 767,
            proteins: 12,
            fats: 74,
            carbs: 21,
            image: "https://b.zmtcdn.com/data/pictures/3/20317633/e3f301a6a4e2b7959acf69cfe9e3413d.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            discountCode: "ESBORNBLUE",
        },
        "258964": { 
            name: "Subway", 
            dish: "Potato Chilli Cheese", 
            description: "Hot toasted sub loaded with 1.5x potato patty and real mozz cheese,...",
            price: 259,
            discount: 15,
            calories: 667,
            proteins: 21,
            fats: 84,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/d59/2dd4ef47c6cce04589e38812222c0d59.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258965": { 
            name: "Domino's", 
            dish: "Chicken Dominator Pizza", 
            description: "Loaded with double pepper barbecue chicken, peri-peri chicken...",
            price: 429,
            discount: 25,
            calories: 796,
            proteins: 31,
            fats: 74,
            carbs: 51,
            image: "https://media.istockphoto.com/id/187248625/photo/pepperoni-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=clncU414Y_vfH-OoUqiwy5AnZRwBpeSehVqJkD9SvKU=",
            discountCode: "ESBORNBLUE",
        },
        "258966": { 
            name: "Starbucks Coffee", 
            dish: "Coffee", 
            description: "Almost too cute to drink, our Crunchy Red Hat Mocha Crème Frappuccino is a perfect blend of milk...",
            price: 400,
            discount: 5,
            calories: 958,
            proteins: 30,
            fats: 10,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/pictures/chains/4/43344/ff2ad5334d73592b70e36bf4098e2e6e.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            discountCode: "ESBORNBLUE",
        },
        "258967": { 
            name: "Burger King", 
            dish: "Crispy Veg Burger.", 
            description: "(300 gms) Slow-cooked to perfection, our Chicken Haleem is a rich and flavorful dish...",
            price: 99,
            discount: 15,
            calories: 457,
            proteins: 21,
            fats: 64,
            carbs: 31,
            image: "https://media.istockphoto.com/id/511484502/photo/double-cheese-and-bacon-cheeseburger.webp?a=1&b=1&s=612x612&w=0&k=20&c=Us0joN2d51ced9vo3zcDjJLID_p_INwtS2rTa-SLWZQ=",
            discountCode: "ESBORNBLUE",
        },
        "258968": { 
            name: "Pizza Hut", 
            dish: "Pizza, Italian", 
            description: "(Choice is yours! Pick a half each of any 2 Veg Pizzas & make one Big 10 inch Pizza....",
            price: 199,
            discount: 25,
            calories: 867,
            proteins: 21,
            fats: 74,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/968/2f53ea2c4f52eb61f93cb5b8b214c968.jpeg?output-format=webp",
            discountCode: "ESBORNBLUE",
        },
        "258969": { 
            name: "Baba Falooda", 
            dish: "Desserts, Ice Cream", 
            description: "(Kesar Pista & Kaju kishmish Ice-Cream, Sliced Badam, Kaju, Milk, Falooda, Sweet Basil Seeds (Sabza), Sugar Syrup...",
            price:150,
            discount: 15,
            calories: 867,
            proteins: 51,
            fats: 54,
            carbs: 21,
            image: "https://b.zmtcdn.com/data/dish_photos/bc3/461b48ddbc16c51b47f0da49d2dd3bc3.png?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258970": { 
            name: "Amritsar Haveli Express", 
            dish: "North Indian", 
            description: "(Dal Makhani+Mixed Veg+Raita+Salad+3 Tandoori Roti...",
            price: 250,
            discount: 15,
            calories: 667,
            proteins: 21,
            fats: 34,
            carbs: 51,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/8/27/b619173d-0023-4a46-93ef-d21178460cef_a647d302-cced-49d6-9542-3bf55a2cdb55.png_compressed",
            discountCode: "ESBORNBLUE",
        },
        "258971": { 
            name: "Shalimar", 
            dish: "Chicken Tikka Kebab", 
            description: "Succulent chunks of chicken tikka marinated in curd and spicy masala, grilled on charcoal....",
            price: 590,
            discount: 25,
            calories: 767,
            proteins: 61,
            fats: 64,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/062/9c856b6848eaa4305dfe85cf606a2062.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258972": { 
            name: "Mani Cafe", 
            dish: "Podi Idli", 
            description: "(Delicious idli covered with cheese and chili flakes and oregano...",
            price: 99,
            discount: 25,
            calories: 867,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/4d4/7d90d3f3ae53712d26337827ee4e94d4.png?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258973": { 
            name: "Cafe Saheen", 
            dish: "Chicken Tikka Biryani", 
            description: "Grilled chicken tikka pieces cooked with aromatic biryani rice and spices....",
            price: 490,
            discount: 25,
            calories: 567,
            proteins: 31,
            fats: 71,
            carbs: 51,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/12/24/d78033b3-9979-4963-86bf-48b7475979ef_6e404599-da12-400a-b950-787716682dfb.jpg",
            discountCode: "ESBORNBLUE",
        },
        "258974": { 
            name: "Merwans Cake ", 
            dish: "Bakery,Desserts", 
            description: "Fresh Grapes, White Chocolate Cream & Vanilla Sponge...",
            price: 486,
            discount: 25,
            calories: 767,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ct8xbxqqcn2nozergs6n",
            discountCode: "ESBORNBLUE",
        },
        "258975": { 
            name: "Hotel Sai Pooja", 
            dish: "North Indian,South Indian", 
            description: "Crispy and flavorful South Indian fritters, perfect for snacking....",
            price: 69,
            discount: 25,
            calories: 867,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/uw4ly0tirkozlpt0257m",
            discountCode: "ESBORNBLUE",
        },
        "258976": { 
            name: "Amritsari Punjabi Paratha", 
            dish: "paratha,Punjabi", 
            description: "Serves 1 | paratha stuffed with mooli to relish your memories of maa ke haath ka kana...",
            price: 149,
            discount: 15,
            calories: 367,
            proteins: 11,
            fats: 33,
            carbs: 14,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/41a678f84b91ccec76eeb4e339cf2f42",
            discountCode: "ESBORNBLUE",
        },
        "258977": { 
            name: "Beles Sweets", 
            dish: "Desserts,Chaat", 
            description: "Tiny balls of chhena soaked in malai (clotted cream) flavoured with cardamom and saffron garnished with sliver of dryfruits...",
            price: 160,
            discount: 20,
            calories: 637,
            proteins: 31,
            fats: 54,
            carbs: 18,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/vgzprycjuvk4ojdd989d",
            discountCode: "ESBORNBLUE",
        },
        "258978": { 
            name: "Raju Ki Chai", 
            dish: "Beverages,Snacks", 
            description: "A fusion delight featuring a crispy samosa, topped with grated cheese, tomato slices, onion slice...",
            price: 229,
            discount: 25,
            calories: 757,
            proteins: 61,
            fats: 64,
            carbs: 51,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/13f51ac3115ab78465a0026ddc1d7071",
            discountCode: "ESBORNBLUE",
        },
        "258979": { 
            name: "LunchBox - Meals and Thalis", 
            dish: "Thalis,North Indian", 
            description: "Home-style rajma cooked in thick & mildly spiced tomato gravy will surely make you nostalgic for home. Served with a side of Rice & creamy Dal Makhani....",
            price: 199,
            discount: 25,
            calories: 567,
            proteins: 36,
            fats: 64,
            carbs: 25,
            image: "https://b.zmtcdn.com/data/dish_photos/ee4/b617f1450cf35b3541c5d973f7144ee4.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258980": { 
            name: "Bayroute", 
            dish: "Middle Eastern, Arabian", 
            description: "Asian, Sushi, Thai, Japanese,...",
            price: 799,
            discount: 25,
            calories: 767,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/pictures/chains/3/18657283/348468ac6c8dbbfa4d3715308f19701c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            discountCode: "ESBORNBLUE",
        },
        "258981": { 
            name: "Harvest Salad Co", 
            dish: "Salad, Healthy Food", 
            description: "Lettuce, kale, grilled paneer, cherry tomatoes, oven-roasted croutons, fresh cucumber with our in-house classic caesar dressing ...",
            price: 299,
            discount: 25,
            calories: 877,
            proteins: 21,
            fats: 25,
            carbs: 67,
            image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/28/09c5f0ea-eb0d-4e7d-aa2b-daf33162feae_13c9d254-2a70-4899-99b6-87baa71e367d.jpg",
            discountCode: "ESBORNBLUE",
        },
        "258982": { 
            name: "Chaayos Chai+Snacks=Relax", 
            dish: "Tea", 
            description: "An all-time snack - spicy samosa with chatpata Imli sauce in bun...",
            price: 49,
            discount: 5,
            calories: 867,
            proteins: 21,
            fats: 64,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/pictures/chains/9/18558869/bdc20b0389772fab01ca6c88eba606c4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258983": { 
            name: "Natural Ice Cream", 
            dish: "Ice Cream", 
            description: "An original Naturals creation, Tender Coconut ice cream ...",
            price: 149,
            discount: 5,
            calories: 867,
            proteins: 21,
            fats: 14,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/88f/6cd8778cf0c95e12108d06eac5c8288f.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258984": { 
            name: "Mithiyaj", 
            dish: "Bakery, Mithai, Desserts", 
            description: "Milk, Vanilla Sponge, Bengali Rasmalai, Saffron Milk Soaked Chenna & Creamy Milk Topping Pistachio...",
            price: 199,
            discount: 10,
            calories: 457,
            proteins: 11,
            fats: 64,
            carbs: 41,
            image: "https://b.zmtcdn.com/data/dish_photos/7bd/eefd8227ea4e85f5d28ad67e1cc3e7bd.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258985": { 
            name: "Tewari Bros. Mithaiwala", 
            dish: "Mawa Barfi", 
            description: "An indulgent and rich, square-shaped sweet made from fresh cream, condensed milk or khoya and sugar....",
            price: 205,
            discount: 5,
            calories: 867,
            proteins: 21,
            fats: 74,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/34c/53b5a3447ff87f084364f9b679e3134c.jpg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        },
        "258986": { 
            name: "Persian Darbar", 
            dish: "Chicken Tikka Biryani", 
            description: "Grilled chicken tikka pieces cooked with aromatic biryani rice and spices....",
            price: 510,
            discount: 10,
            calories: 667,
            proteins: 21,
            fats: 70,
            carbs: 51,
            image: "https://b.zmtcdn.com/data/dish_photos/957/4ec7bea69dec4029e678191f6a26d957.jpeg?fit=around|130:130&crop=130:130;*,*",
            discountCode: "ESBORNBLUE",
        }
    };

    useEffect(() => {
        if (restaurantData[resId]) {
            setRestaurant(restaurantData[resId]);
        }
    }, [resId]);

    const handleAddToCart = () => {
        const finalQuantity = Math.max(1, quantity);  // ✅ Ensure at least 1 item
        const updatedItem = { ...restaurant, quantity: finalQuantity };

        addToCart(updatedItem);
        alert("Item added to cart!");
    };

    return (
        <div className="menu-container">
            <div className="menu-card">
                <img src={restaurant.image} alt={restaurant.dish} className="dish-image" />
                <div className="menu-details">
                    <p className="restaurant-name">{restaurant.name}</p>
                    <h1 className="dish-name">{restaurant.dish}</h1>
                    <p className="dish-description">{restaurant.description} <span className="read-more">Read More</span></p>
                    
                    <div className="discount-section">
                        <p className="discount-text">
                            Get <strong>FLAT {restaurant.discount}% off</strong> - Use Code <span className="discount-code">{restaurant.discountCode}</span>
                        </p>
                    </div>

                    <div className="price-section">
                        <p className="price">₹{restaurant.price}</p>
                        <div className="quantity">
                            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity ===0}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
                {/* <button className="cart-button" onClick={() => window.location.href = "/cart"}>🛒 View Cart</button> */}
            </div>

            <div className="nutrition-section">
                <h2>Nutritional Value</h2>
                <p className="nutrition-note">Values based on default selection, may vary with customization</p>
                <div className="nutrition-box">
                    <div className="nutrition-item"><p>Calories</p><h3>{restaurant.calories}</h3><p>Kcal</p></div>
                    <div className="nutrition-item"><p>Proteins</p><h3>{restaurant.proteins}</h3><p>grams</p></div>
                    <div className="nutrition-item"><p>Fats</p><h3>{restaurant.fats}</h3><p>grams</p></div>
                    <div className="nutrition-item"><p>Carbs</p><h3>{restaurant.carbs}</h3><p>grams</p></div>
                </div>
            </div>

            {/* <button className="cart-button">🛒 View Cart</button> */}
            <button className="cart-button" onClick={() => window.location.href = "/cart"}>🛒 View Cart</button>
        </div>
    );
};

export default RestaurantMenu;



