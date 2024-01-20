import {CDN_URL} from "../config/constant";
import { MENU_URL } from "../config/constant";

const RestaurantCard=(props)=>{

    const {resData}=props
    const{avgRating,cloudinaryImageId,costForTwo,cuisines,name,sla}=resData.info

    return (
        <div className="res-card">
            <img className="card-logo" src={CDN_URL+cloudinaryImageId} alt="Image not found" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>

        </div>
    )
}

export default RestaurantCard;