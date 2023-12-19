import React from "react";
import './shop.css';
import {useContext} from 'react';
import {PizzaContext} from '../../context/pizza-context'

export const Product = (props) => {
	const {id, name, description, price, image} = props.data;
	const {addToCart, cartItems} = useContext(PizzaContext);
    let count = cartItems[id];
	
	return (
			<div className="product">
				<table>
					<tr>
						<td><img src={image} alt={name} /></td>
					</tr>
				</table>
				<table>
					<tr>
						<td><h2>{name}</h2></td>
					</tr>
					<tr>
						<td><h3>{description}</h3></td>
					</tr>
					<tr>
						<td><p>Price: RM{price}</p></td>
					</tr>
					<tr>
						<button
							className="add-to-cart-button"
							onClick={() => addToCart(id)}>
							Add to Order {count > 0 && <>({count})</>}
						</button>
					</tr>
				</table>
			</div>
	);
}

