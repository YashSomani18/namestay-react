import React, { lazy, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => {
  return import("./components/Grocery");
});




const AppLayout = () => {

  const[userName , setUserName] = useState();

useEffect(()=>{
  const data = {
    name:"Yash Somani"
  }

  setUserName(data.name);

  
},[]);
  return (
    <UserContext.Provider value= {{loggedInUser: userName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Hiiiii</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter} />);
