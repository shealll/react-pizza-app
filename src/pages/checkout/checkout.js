import React, { useContext } from "react";
import { PizzaContext } from "../../context/pizza-context";
import { PIZZA } from "../../products";
import { CheckoutItem } from "./checkout-item";
import { useNavigate } from "react-router-dom";

import cash from "../../images/cash.png";
import visa from "../../images/visa.png";
import touchngo from "../../images/touchngo.png";
import online from "../../images/online.png";

import "./checkout.css";
export const Checkout = () => {
    const {cartItems, getTotalCartAmount, formData, handleSubmit, handleChange, overallFormErrorMessage, handleRadioButton, selectedRadio} = useContext(PizzaContext);
    const totalAmount = (getTotalCartAmount()).toFixed(2);
    const tax = (totalAmount * 0.06).toFixed(2);
    const Del = 4.00;
    const navigate = useNavigate(); 


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
                            <label htmlFor="add1">Address Line 1 : </label>
                            <input type="text" id="add1" name="add1" value={formData.add1} onChange={handleChange} maxLength={50} required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="add2">Address Line 2 : </label>
                            <input type="text" id="add2" name="add2" value={formData.add2} onChange={handleChange} maxLength={50}/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="add3">Address Line 3 : </label>
                            <input type="text" id="add3" name="add3" value={formData.add3} onChange={handleChange} maxLength={50}/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="postcode">Postal Code : </label>
                            <input type="postcode" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} maxLength={5}/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="state">State : </label>
                            <input type="state" id="state" name="state" value={formData.state} onChange={handleChange} maxLength={25}/>
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
                            </div>
                            <div className="align-right">
                                <p>RM{totalAmount}</p>
                                <p className="instructions"> RM{tax}</p>
                                <p> RM{Del} </p>
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
                            <label htmlFor="fname">First Name : </label>
                            <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} maxLength={25} required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="lname">Last Name : </label>
                            <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} maxLength={25} required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="contact">Contact : </label>
                            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} minLength={10}maxLength={12} required/>
                            </span>
                            <br/>
                            <span>
                            <label htmlFor="email">Email : </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                            </span>
                        </div>
                    </div>
                </div>

                {/*Payment Method*/}
                <div className="summary-container">
                    <div className="title-container">
                        <h2>Payment Details</h2>
                    </div>
                <div className="checkout">
                    <div className="payment-desc">
                        <p className="instructions"> Payment Method </p>
                    </div>
                        <div className="payment-radio" required>
                            <span>
                            <input 
                            type="radio" 
                            id="cash" 
                            name="payment_method" 
                            value="Cash On Delivery"
                            checked={selectedRadio === 'Cash On Delivery'}
                            onChange={handleRadioButton}
                            defaultChecked
                            />
                            <label htmlFor="cash" className="radio"> Cash on Delivery
                            </label>
                            <div className="align-icon">
                            <img src={cash} alt="cash" />
                            </div>
                            </span><br/>
                            <span>

                            <input 
                            type="radio" 
                            id="card" 
                            name="payment_method" 
                            value="Credit or debit card"
                            checked={selectedRadio === "Credit or debit card"}
                            onChange={handleRadioButton}
                            />
                            <label htmlFor="card"> Credit or debit card</label>
                            <div className="align-icon">
                            <img src={visa} alt="card"/>
                            </div>
                            </span><br/>
                            <span>

                            <input 
                            type="radio" 
                            id="touchngo" name="payment_method" value="Touch 'n Go eWallet (Alipay+)"
                            checked={selectedRadio === "Touch 'n Go eWallet (Alipay+)"}
                            onChange={handleRadioButton}
                            />
                            <label htmlFor="touchngo"> Touch 'n Go eWallet (Alipay+)</label>
                            <div className="align-icon">
                            <img src={touchngo} alt="touch n go"/>
                            </div>
                            </span><br/>
                            <span>

                            <input 
                            type="radio" 
                            id="online" 
                            name="payment_method" value="Online Banking"
                            checked={selectedRadio === "Online Banking"}
                            onChange={handleRadioButton}
                            />
                            <label htmlFor="online"> Online Banking</label>
                            <div className="align-icon">
                            <img src={online} alt="online"/>
                            </div>
                            </span><br/>
                        </div>
                        <div className="align-button">
                            <button type="submit" id="placeorder">
                                Place Order
                            </button>
                            {overallFormErrorMessage && <p style={{ color: 'red' }}>{overallFormErrorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </form>
        ) : (
            <div className="checkout">
              <h2>Your Cart is Empty! <br></br>Start Ordering our Pizza!</h2>
              <div className="align-button">
                <button onClick={() => navigate("/")}> Continue Shopping </button>
              </div>
            </div>
        )}
      </div>

  );
};