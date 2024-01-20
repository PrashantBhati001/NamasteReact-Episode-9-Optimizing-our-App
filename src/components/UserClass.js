import React from "react";


class UserClass extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={

            userInfo:{
                name:"default",
                location:"asia",
                bio:""
            }
            
        }

    }

    async componentDidMount()
    {
       const data=await fetch("https://api.github.com/users/PrashantBhati001")
       const json=await data.json()
       this.setState({userInfo:json})
  
    }

    componentDidUpdate()
    {
        console.log("compoenentDidupdate called")
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount called")
    }


    render()
    {

        
        const {name,location,bio}=this.state.userInfo
        return (
            <div className="user-info">
                <p>{name}</p>
                <p>{location}</p>
                <p>{bio}</p>
            </div>
    )
    }
}

export default UserClass;

