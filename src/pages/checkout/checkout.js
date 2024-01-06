import React, { useContext} from "react";
import { PizzaContext } from "../../context/pizza-context";
import { PIZZA } from "../../data/products";
import { CheckoutItem } from "./checkout-item";
import { useNavigate } from "react-router-dom";
import DropIn from 'braintree-web-drop-in-react';
import {Oval} from 'react-loader-spinner';

import "./checkout.css";

export const Checkout = () => {

    const {cartItems, getTotalCartAmount, formData, handleSubmit, 
        handleChange, clientToken, loading, processingOrder, 
        APIRequest, success, setData, handleContactChange, isError, formError, setTotal} = useContext(PizzaContext);
    const totalAmount = (getTotalCartAmount().toFixed(2));
    const subTotal = (getTotalCartAmount());
    const tax = (subTotal * 0.06).toFixed(2);
    const Del = 4.00;
    const num = subTotal + subTotal*0.06 + Del;
    const bigTotal = num.toFixed(2);
    setTotal(bigTotal);
    const navigate = useNavigate(); 

    APIRequest();

    if (success)
        return navigate("/thank-you");

  return (
      <div className="order">
        <div>
          <h1>Checkout</h1>
        </div>
        {totalAmount > 0 ? (
        <form onSubmit={handleSubmit}>
            <div>
                {/*Address*/}
                <div className="summary-container">
                    <div className="title-container">
                        <h2>Deliver to</h2>
                    </div>
                    <div className="checkout">
                        <div className="personal">
                            <span>
                            <label htmlFor="street_add">Street Address : </label>
                            <textarea
                                type="text" 
                                id="street_add" 
                                name="street_add" 
                                value={formData.street_add} 
                                onChange={handleChange} 
                                maxLength={200} 
                                required >
                            </textarea>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="city">City : </label>
                            <input                                  
                                type="text" 
                                id="city" 
                                name="city" 
                                value={formData.city} 
                                onChange={handleChange} 
                                maxLength={50}
                                required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="postcode">Postal Code : </label>
                            <input                                  
                                type="postcode" 
                                id="postcode" 
                                name="postcode" 
                                value={formData.postcode} 
                                onChange={handleChange} 
                                maxLength={5}
                                required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="state">State : </label>
                            <input                                 
                                type="state" 
                                id="state" 
                                name="state" 
                                value={formData.state} 
                                onChange={handleChange} 
                                maxLength={25}
                                required/>
                            </span>
                        </div>
                    </div>
                </div>

                {/*Order summary*/}
                <div className="summary-container">
                    <div className="title-container">
                        <h2>Order Summary</h2>
                    </div>
                    {PIZZA.map((product) => {
                        if (cartItems[product.id] !== 0) {
                        return <CheckoutItem data={product} />;
                        }
                    })}
                    <div className="checkout">
                        <div className="align-row">
                            <div className="align-left">
                                <p>Subtotal:</p>
                                <p className="instructions"> Incl. Tax:</p>
                                <p> Delivery Fees:</p>
                                <p id="bigtotal"> Total: </p>
                            </div>
                            <div className="align-right">
                                <p>RM{totalAmount}</p>
                                <p className="instructions"> RM{tax}</p>
                                <p> RM{Del} </p>
                                <p id="bigtotal"> RM{bigTotal} </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*Personal Details*/}
                <div className="summary-container">
                    <div className="title-container">
                        <h2>Personal Details</h2>
                    </div>
                    <div className="checkout">
                        <div className="personal">
                            <span>
                            <label htmlFor="first_name">First Name : </label>
                            <input                                  
                                type="text" 
                                id="first_name" 
                                name="first_name" 
                                value={formData.first_name} 
                                onChange={handleChange} 
                                maxLength={25} 
                                required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="last_name">Last Name : </label>
                            <input                                  
                                type="text" 
                                id="last_name" 
                                name="last_name" 
                                value={formData.last_name} 
                                onChange={handleChange} 
                                maxLength={25} 
                                required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="phone">Contact <br></br>Number: </label>
                            <input                                
                                type="text" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleContactChange} 
                                required/>     
                            </span>
                            <div className="invalid-message">
                            <p >{isError ? "Please enter a valid phone number." : ""}</p>
                            </div>
                            <br/>
                            <span>
                            <label htmlFor="email">Email : </label>
                            <input                                 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required/>
                            </span>
                        </div>
                    </div>
                </div>

                {/*Payment Method*/}
                <div className="checkout">
                    <div className="payment-container">
                    {
                        loading || clientToken === null ? (
                            <div>
                                <Oval
                                    color="#00bfff"
                                    width={50}
                                    height={50}    
                                />
                            </div>
                        ) : (
                            <DropIn
                                options={{
                                    authorization: clientToken,
                                    paypal: {
                                        flow: 'vault'
                                    }
                                }}
                                onInstance={ instance => setData({ instance: instance })}
                            />
                        )
                    }
                    {
                        processingOrder ? (
                            <div>
                                <Oval
                                    color="#00bfff"
                                    width={50}
                                    height={50}    
                                />
                            </div>
                        ) : (
                            <div>
                                {
                                    loading ? (
                                        <div></div>
                                    ) : (
                                        <div>
                                            <div className="invalid-message">
                                                <p >{formError ? "There is invalid data entered, please check again." : ""}</p></div>
                                            <div className="align-button">
                                                <button 
                                                    type="submit" 
                                                    id="placeorder"
                                                >
                                                    Place Order
                                                </button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        </form>
        ) : (
            <div className="checkout">
              <h2>Your Cart is Empty! <br></br>Start Ordering our Pizza!</h2>
              <div className="align-button">
                <button onClick={() => navigate("/react-pizza-app")}> Continue Shopping </button>
              </div>
            </div>
        )}
      </div>

  );
};
