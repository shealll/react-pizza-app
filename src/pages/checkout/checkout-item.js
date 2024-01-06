import React, { useContext } from "react";
import { PizzaContext } from "../../context/pizza-context";

export const CheckoutItem = (props) => {
  const { id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  useContext(PizzaContext);

  return (
    <div className="checkItem">
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>RM{price}</p>      
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
  );
};