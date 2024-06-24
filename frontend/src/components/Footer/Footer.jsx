import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Join us at YooFoods and discover why we're more than just a restaurant – we're a destination for food lovers, a place where every meal is an occasion to celebrate taste, community, and the joy of good food. Experience the difference at YooFoods, where every dish is a testament to our passion for food and commitment to your satisfaction.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>91+1234567889</li>
                    <li>test@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">idfiohaghfghfghfjgh</p>
    </div>
  )
}

export default Footer