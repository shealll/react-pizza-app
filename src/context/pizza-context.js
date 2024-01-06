import React, {createContext, useState, useEffect} from "react";
import {PIZZA} from "../data/products";
import axios from 'axios';

export const PizzaContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i < PIZZA.length +1; i++) {
        cart[i] = 0
    }
    return cart;
};

export const PizzaContextProvider = (props) => {
    const initialFormData = {street_add: "", city: "", postcode: "",
    state: "", first_name: "", last_name: "", phone: "", email: "", total_amount: ""};
    let updatedFormData = {};
  
    const [searchItems, setSearchItems] = useState('');
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [formData, setFormData] = useState(initialFormData);
    const [totals, setTotal] = useState(0);
    const [clientToken, setClientToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [processingOrder, setProcessingOrder] = useState(false);
    const [success, setSuccess] = useState(false);
    const [dataInstance, setData] = useState({
      instance: {}  //an empty object that the dropin UI is going to update
    });
    const [isError, setIsError] = useState(false);
    const pattern = new RegExp(/^(\+?6?01)[02-46-9]-*[0-9]{7}$|^(\+?6?01)[1]-*[0-9]{8}$/);
    const [formError, setFormError] = useState(false);

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

    const searchPizzaName = (event) => {
        setSearchItems(event.target.value);
    };
 
    const filterPizzaName = PIZZA.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchItems.toLowerCase())
    );

    const handleChange = (event) => {
      updatedFormData = { ...formData, [event.target.name]: event.target.value };
      setFormData(updatedFormData);
    }

    //handle contact validations
    const handleContactChange = (event) => {
      updatedFormData = { ...formData, [event.target.name]: event.target.value };
      setFormData(updatedFormData);
      if (!pattern.test(event.target.value))
        setIsError(true);
      else setIsError(false);
    }

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (
        formData.first_name !== '' &&
        formData.last_name !== '' &&
        formData.phone !== '' &&
        formData.email !== '' &&
        formData.street_add !== '' &&
        formData.city !== '' &&
        formData.postcode !== '' &&
        formData.state !== '' && 
        isError === false
      ) {
          setFormError(false);
          formData.total_amount = totals;
          const config = {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          };

          let {nonce} = await dataInstance.instance.requestPaymentMethod();

          setProcessingOrder(true);
          
          const body = JSON.stringify({...formData, nonce});

          try {
            const res = await axios.post('http://localhost:8000/api/payment/process-payment', body, config)

            if (res.status === 201) {
              setSuccess(true);
            }
          }
          catch(err){}

          setProcessingOrder(false);
      }
      else {
        return setFormError(true);
      }
    };

    const APIRequest = () => {
      useEffect(() => {
          const fetchData = async () => {
              const config = {
                  headers: {
                      'Accept': 'application/json',
                  }
              }
              try {
                  const res = await axios.get('http://localhost:8000/api/payment/generate-token', config);
  
                  if (res.status === 200) {
                      setClientToken(res.data.token);
                      setLoading(false);
                      setProcessingOrder(false);
                  }
              }
              catch(err) {}
          };
          fetchData();
      }, []);
  };

    const contextValue = {
        searchPizzaName,
        filterPizzaName,
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        formData,
        handleSubmit,
        handleChange,
        clientToken,
        loading,
        processingOrder,
        APIRequest, 
        success, 
        setData,
        handleContactChange,
        isError,
        formError,
        setTotal
      };
      return (
          <PizzaContext.Provider value={contextValue}>
          {props.children}
          </PizzaContext.Provider>
      );
};