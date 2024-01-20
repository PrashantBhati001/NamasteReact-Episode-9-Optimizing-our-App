import useRestaurantMenu from "../config/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantMenu=()=>{

    
    const {resId}=useParams()
    const menuData=useRestaurantMenu(resId)


    if(menuData==null)
    {
        return <Shimmer/>
    }

    const {name,costForTwoMessage,cuisines,avgRating,feeDetails}=menuData?.cards[0]?.card?.card?.info
    const {itemCards}=menuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card

    return (
        <div className="Menu">
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{feeDetails.message}</h4>
           { itemCards.map((res)=>{
            return (
                <li>
                      {res.card.info.name}
                </li>
            )

            })}
        
        </div>
    )

}

export default RestaurantMenu;