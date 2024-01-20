import { render } from "react-dom";
import User from "./User"
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
  constructor(props)
  {
    super(props)
   
  }

  componentDidMount(){
    
  }


  render()
  {
    
    return (
      <div>
        <h1>About Us</h1>
        <UserClass name={"Ankit"} designation={"SDE2"}/>
      </div>
  )
  }
}

export default About;





