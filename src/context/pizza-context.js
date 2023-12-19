import React, {createContext, useState} from "react";
import {PIZZA} from "../products";

export const PizzaContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i < PIZZA.length +1; i++) {
        cart[i] = 0
    }
    return cart;
};

let initialFormData = {add1: "", add2: "", add3: "", postcode: "",
 state: "", fname: "", lname: "", contact: "", email: "", pay: ""};

let updatedFormData = {};

export const PizzaContextProvider = (props) => {
    const [searchItems, setSearchItems] = useState('');
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [formData, setFormData] = useState(initialFormData);
    const [overallFormErrorMessage, setOverallFormErrorMessage] = useState('');
    const [selectedRadio, setSelectedRadio] = useState("");

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PIZZA.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
      return totalAmount;
    };

    const addToCart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]: prev[itemID]+1 }));
    };

    const removeFromCart = (itemID) => {
      setCartItems((prev) => ({...prev, [itemID]: prev[itemID]-1 }));
    };

    const updateCartItemCount = (newAmount, itemID) => {
      setCartItems((prev) => ({ ...prev, [itemID]: newAmount }));
    };
    
    const checkout = () => {
      setCartItems(getDefaultCart());
    };

    const handleRadioButton = (event) => {
      setSelectedRadio(event.target.value);
    };

    const handleChange = (event) => {
      updatedFormData = { ...formData, [event.target.name]: event.target.value };
      setFormData(updatedFormData);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      let isFormValid = true;

      if (isFormValid) {
        setOverallFormErrorMessage('');
        alert(`Your Pizza Order has been placed!
        ${formData.fname} ${formData.lname} 
        Contact: ${formData.contact}
        Email: ${formData.email}

        Delivering to:
        ${formData.add1}
        ${formData.add2} ${formData.add3}
        ${formData.postcode} ${formData.state}
        Payment Method: ${selectedRadio}
        
        Your order will arrive within an hour!
      `);
      }
      else 
        setOverallFormErrorMessage('There is at least one form field that is invalid');
    };

    const searchPizzaName = (event) => {
        setSearchItems(event.target.value);
    };
 
    const filterPizzaName = PIZZA.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchItems.toLowerCase())
    );

    const contextValue = {
        searchPizzaName,
        filterPizzaName,
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
        formData,
        handleSubmit,
        handleChange,
        overallFormErrorMessage,
        handleRadioButton,
        selectedRadio
      };
      return (
          <PizzaContext.Provider value={contextValue}>
          {props.children}
          </PizzaContext.Provider>
      );
};