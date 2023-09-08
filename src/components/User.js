import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increment</button>

      <h1>Name : {props.name}</h1>
      <h2>Location:{props.location}</h2>
      <h2>Linkedin: @yashsomani_18</h2>
    </div>
  );
};

export default User;
