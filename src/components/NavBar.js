//components/SearchComponent.js
import './NavBar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Pizza, ShoppingCart} from 'phosphor-react';

export const NavBar = () =>{
	return (
		<div className="App-container">
			<header className="App-header">
				<div className="Nav-left">
					<Link to="/react-pizza-app"  className="Nav-link">
						<h1 className="App-title">Bananas Pizzeria</h1>
						<span><Pizza size={38} weight="duotone"/></span>
					</Link>
				</div>
				<div className="Nav-right">
					<div className="Nav-button">
						<Link to="/cart" className="Nav-link">
							<span><ShoppingCart size={20} /></span>
						</Link>
					</div>
					<div className="Nav-button">
						<Link to="/react-pizza-app" className="Nav-link">
							<span id="login">Login/Sign Up</span>
						</Link>
					</div>
				</div>
			</header>
		</div>
	  )
}
