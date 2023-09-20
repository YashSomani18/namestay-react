import RestaurantCard from "../RestaurantCard";
import { Screen,render } from "@testing-library/react";

it("should render restaurant card component with props data ",()=>{
    render(<RestaurantCard /> );
});