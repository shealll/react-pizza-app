import './Footer.css';
import React from 'react';
import {REVIEW} from "../products";
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
				<p><a href="#">Google Review</a></p>
			</div>
		);
	return (
		<div className="footer-container">
			<div className="review-container">
				{listReviews}
			</div>
			<div className="contact-container">
				<div className="faq-col">
					<p>Here to Help</p>
					<a href="#">Delivery Fee</a>
					<a href="#">FAQ</a>
					<a href="#">Allergen and Diet Information</a>
					<a href="#">Contact Us</a>
					<a href="#">Join Our Team</a>
					<a href="#">Blogs</a>
				</div>
				<div className="faq-col">
					<p>Know More</p>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
					<a href="#">Refund and Cancellation Policy</a>
				</div>
			</div>
			<div className="bar">
				<div className="bar-left">
					<p>© 2023 BANANAS PIZZERIA SDN BHD</p>
				</div>
				<div className="social-links">
					<a href="#"><img src={insta} className="social-img"/></a>
					<a href="#"><img src={fb} className="social-img"/></a>
					<a href="#"><img src={twitter} className="social-img"/></a>
				</div>
			</div>
		</div>
	  )
}
