import React, { useContext } from 'react'
import './shop.css';
import {Product} from './showproduct';
import { PizzaContext } from "../../context/pizza-context";

export const Shop = () => {
    const {searchItems, searchPizzaName, filterPizzaName} = useContext(PizzaContext);
    return (
        <div>
            <div className="search-container">
                <div className="search-column">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for Pizza..."
                            value={searchItems}
                            onChange={searchPizzaName}
                        />
                    </div>
                </div> 
            </div>
            <div >
            {filterPizzaName.length === 0 ? (
                <p>Sorry, No matching Product found.</p>
            ) : (
                <div className='content-container'>
                    <h2 className="product-heading">Signature Pizza</h2>
                    <div className="product-list">

                        {filterPizzaName.map((product) => (
                            <Product data={product}/>
                        ))}
                    </div>
                </div>

                )}
            </div>
        </div>
    )
}