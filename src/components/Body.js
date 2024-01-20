import RestaurantCard from "./RestaurantCard";
//import resList from "../config/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../config/useOnlineStatus";


const Body=()=>{

    const [listOfRestaurants,setlistOfRestaurants]=useState([])
    const [filteredRestaurants,setFilteredRestaurants]=useState([])
    const [searchText,setsearchText]=useState("")


    useEffect(()=>{
        fetchData()
    },[])


    const fetchData=async()=>{
    
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.148729542592013&lng=77.6095475256443&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json=await data.json()            
            setlistOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setFilteredRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        
    }

    const handleTopFilterButton=()=>{

        const newList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
        setFilteredRestaurants(newList)

    }

    const handleSearchButton=()=>{
        const newarr=[]
        for(let i=0;i<listOfRestaurants.length;i++)
        {
            const dishName=listOfRestaurants[i].info.name.toLowerCase()
            if(dishName.includes(searchText.toLowerCase()))
            {
                newarr.push(listOfRestaurants[i])
            }
        }
        setFilteredRestaurants(newarr)
    }


   const onlineStatus=useOnlineStatus()

   if(onlineStatus==false)
   {
    return <h1>OOPS,Looks like  you are offline!!!</h1>
   }

    return listOfRestaurants.length === 0?(<Shimmer />):(
        <div className="body">
            <div className="Filter">

                <div className="search">
                    <input type="text"  value={searchText}  onChange={(e)=>{setsearchText(e.target.value)}}/>
                    <button className="search-btn" onClick={handleSearchButton}>Search</button>   
                </div>

                <button className="filter-btn" onClick={handleTopFilterButton}>Top price food</button>
   
            </div>

            <div className="res-container">
                {filteredRestaurants.map((restaurant)=> <Link to={"/restaurant/"+restaurant.info.id}  key={restaurant.info.id}>  <RestaurantCard   resData={restaurant}/> </Link>)}
            </div>

        </div>
    )
}

export default Body



//Single responsibilty principle:It says that every function,class should have a single repsonsibilty.This helps in making the code modular,reusbale
// and helps easing testing