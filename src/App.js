import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

export const App = () => {
  return (
    <div>
      <Cart/>
      <Register/>
      <Login/>
   {/*   <Home/>*/}
    </div>
  );
}

