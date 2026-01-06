// Pas de curly= importe tout
import { createRoot } from "react-dom/client";
// named import, va dans la library et prend juste createRoot
// import { Pizza } from "./Pizza";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni pizza"
        description="tomatoe, mozzarella, peperoni"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="American pizza"
        description="tomatoe, mozzarella, burger"
        image="/public/pizzas/big_meat.webp"
      />
      <Pizza
        name="Hawai pizza"
        description="tomatoe, mozzarella, ananas"
        image="/public/pizzas/hawaiian.webp"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
