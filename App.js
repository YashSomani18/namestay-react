import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Hello by React js");

const parent = React.createElement("div",{id:"div"},
React.createElement("h1", {id: "heading"}, "Hello by React js"));

const second = React.createElement("div",{id: "division"}, [
    React.createElement("h1",{id:"head1"},"Hello myself React"),
    React.createElement("h2",{id:"head2"},"Hello i am second react")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(second); //object

root.render(second);


