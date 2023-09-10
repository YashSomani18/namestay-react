import React from "react";
import { Link } from "react-router-dom";

class userClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name :"Dummy",
        location:"Default"
      }
    };
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/YashSomani18");
    const json = await data.json();
    this.setState({
        userInfo: json
    })
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component did updated ");
  }

  render() {
    const { name, location } = this.state.userInfo;
    
    return (
      <div className="user-card border border-black border-solid rounded-lg p-4 m-4 hover:bg-yellow-100">
        <h1>Name : {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Linkedin: <Link to="https://www.linkedin.com/in/yashsomani18/">@yashsomani18</Link></h2>
      </div>
    );
  }
}

export default userClass;
