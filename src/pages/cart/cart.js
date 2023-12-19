import React, { useContext } from "react";
import { PizzaContext } from "../../context/pizza-context";
import { PIZZA } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount} = useContext(PizzaContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate(); 

  return (
    <div className="cart-container">
      <div className="cart">
          <h1>Cart</h1>
          {PIZZA.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />;
            }
          })}
          
          {totalAmount > 0 ? (
            <div className="checkout">
              <div className="pricing">
                <p> Subtotal: RM{totalAmount} </p>
                <p id="instructions"> Delivery fees will be shown after you review order </p>
              </div>
              <div className="align-button">
                <button onClick={() => navigate("/react-pizza-app")}> Continue Shopping </button>
                <button
                  onClick={() => {
                    navigate("/checkout");
                  }}
                >
                  Review Order
                </button>
              </div>
            </div>
          ) : (
            <div className="checkout">
              <h2>Your Cart is Empty! <br></br>Start Ordering our Pizza!</h2>
              <div className="align-button">
                <button onClick={() => navigate("/")}> Continue Shopping </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};