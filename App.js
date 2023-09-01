import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",{id:"heading"},"Nameste React Object");
console.log(heading);

const jsxHeading = <h1 id="heading"> This is React using JSX</h1>;
console.log(jsxHeading);


const Title = () =>(
  <h2>This is cooler React functional component</h2>  
);

const HeadingComponent = () =>{
    return (
        <div>
            <Title/>
        <h1 className="heading">This is react functional component</h1>

        </div>
    )
}

const Func = () => {
    return (
        <div>
            {HeadingComponent()}
            <HeadingComponent></HeadingComponent>
            <HeadingComponent/>
            <p>Do you know how yash is such a hardworking kid</p>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); // this is how you render your react element
root.render(<Func/>); // this is how you render your react component
