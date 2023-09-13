import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const OnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg">
      <div className="flex items-center ">
        <img className="w-40 mr-2" alt="Logo" src={LOGO_URL} />
      </div>

      <ul className="flex items-center space-x-7 text-lg m-7">
        <li className="hover:underline">
          Status: {OnlineStatus ? "✅" : "🔴"}
        </li>
        <li className="hover:underline">
          <Link className="hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:underline" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>Cart</li>
        <li>
          <Link className="hover:underline" to="/grocery">
            Grocery
          </Link>
        </li>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition duration-200"
          onClick={() => {
            btnNameReact === "Login"
              ? setbtnNameReact("Logout")
              : setbtnNameReact("Login");
          }}
        >
          {btnNameReact}
        </button>
        <li className="px-2 font-bold">{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
