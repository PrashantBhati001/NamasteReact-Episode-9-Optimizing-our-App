import {useState} from "react"

const User=(props)=>{


    return (
        <div className="user-info">
        <p>{props.name}</p>
        <p>{props.designation}</p>
        <p>prashantbhati96@gmail.com</p>
        </div>
    )
}

export default User;