import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const cartItem = screen.getByText("Cart- (0)");

  //const loginButton = screen.getByText("Login");

  expect(cartItem).toBeInTheDocument();
});

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: "Test User" }}>
          <Header />
        </UserContext.Provider>
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
