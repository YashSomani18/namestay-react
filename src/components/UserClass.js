import React from "react";

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
      <div className="user-card">
        <h1>Name : {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Linkedin: @yashsomani_18</h2>
      </div>
    );
  }
}

export default userClass;
