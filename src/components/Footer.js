import './Footer.css';
import React from 'react';
import {REVIEW, LOCATION} from "../data/products";
import insta from "../images/instagram.png";
import fb from "../images/facebook.png";
import twitter from "../images/twitter.png";

export const Footer = () =>{
	let ReviewList = REVIEW;
	let listReviews = ReviewList.map(
		list => 
			<div className="review-card">
				<p>"{list.review}"</p>
				<p>-{list.name}</p>
				<p><a href="#top">Google Review</a></p>
			</div>
		);
	let LocationList = LOCATION;
	let locationData = LocationList.map(
		list => 
			<div className="location-card">
				<div>
					<p id="card-title">{list.loc_name}</p>
					<p>{list.loc_add}</p>
					<p>{list.loc_state}</p>
				</div>
				<div>
					<p id="card-title">DELIVERY HOURS</p>
					<p>Sunday to Saturday</p>
					<p>10.30am to 10pm</p>
				</div>
			</div>
	);

	return (
		<div className="footer-container">
			<div className="review-container">
				{listReviews}
			</div>
			<div className="location-container">
				<h3>Our Locations</h3>
				<div className="location-data">
					{locationData}
				</div>
			</div>
			<div className="contact-container">
				<div className="faq-col">
					<p>Here to Help</p>
					<a href="#top">Delivery Fee</a>
					<a href="#top">FAQ</a>
					<a href="#top">Allergen and Diet Information</a>
					<a href="#top">Contact Us</a>
					<a href="#top">Join Our Team</a>
					<a href="#top">Blogs</a>
				</div>
				<div className="faq-col">
					<p>Know More</p>
					<a href="#top">Privacy Policy</a>
					<a href="#top">Terms of Service</a>
					<a href="#top">Refund and Cancellation Policy</a>
				</div>
			</div>
			<div className="bar">
				<div className="bar-left">
					<p>© 2023 BANANAS PIZZERIA SDN BHD</p>
				</div>
				<div className="social-links">
					<a href="#top"><img src={insta} className="social-img" alt="insta"/></a>
					<a href="#top"><img src={fb} className="social-img" alt="fb"/></a>
					<a href="#top"><img src={twitter} className="social-img" alt="twitter"/></a>
				</div>
			</div>
		</div>
	  )
}
