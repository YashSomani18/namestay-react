import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?w=1060&t=st=1693607302~exp=1693607902~hmac=5884c581bbac98e80e2a946be9801d48322b787df74c007685f6a459b9a565c2"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resName, cuisine, stars, time } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://sandhyahariharan.co.uk/wp-content/uploads/2015/12/vegetable-biryani-1-of-3.jpg"
      ></img>
      <h3> {resName} </h3>
      <h5> {cuisine}</h5>
      <h5> {stars}</h5>
      <h5> {time}</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
          stars="4.3 stars"
          time="30 Mins"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast Food"
          stars="4.5 stars"
          time="26 Mins"
        />

        {/* Restaurant card - we are going to have so many res cards so we will make another function for it. */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
