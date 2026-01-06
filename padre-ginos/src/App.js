import React from "react";
// Pas de curly= importe tout
import { createRoot } from "react-dom/client";
// named import, va dans la library et prend juste createRoot

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(
      "h1",
      { style: { color: "red" }, id: "title" },
      "Padre Gino's",
    ),

    React.createElement(Pizza, {
      name: "The pepperoni pizza",
      description: "Tomatoe, mozarella, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "American pizza",
      description: "Tomatoe, mozarella, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Hawai pizza",
      description: "Tomatoe, mozarella, pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Mortadella pizza",
      description: "Tomatoe, mozarella, mortadella",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
