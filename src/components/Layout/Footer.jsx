import React from "react";
import "./footer.css";
import CARDS from "../../assets/cardslogo.png";
import { BsBagFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer__root">
      <div className="footer__top">
        <div className="footer__top__left">
          <div className="footer__top__left__links">
            <h5>ABOUT</h5>
            <span>Contact Us</span>
            <span>About Us</span>
            <span>Careers</span>
            <span>Flipkart Stories</span>
            <span>Press</span>
            <span>Flipkart Wholesale</span>
            <span>Corporate</span>
            <span>Information</span>
          </div>

          <div className="footer__top__left__links">
            <h5>HELP</h5>
            <span>Payments</span>
            <span>Shipping</span>
            <span>Cancellation & Returns</span>
            <span>FAQ</span>
            <span>Report Infringement</span>
          </div>

          <div className="footer__top__left__links">
            <h5>CONSUMER POLICY</h5>
            <span>Return Policy</span>
            <span>Terms Of Use</span>
            <span>Security</span>
            <span>Privacy</span>
            <span>Sitemap</span>
            <span>Grievance Redressal</span>
            <span>EPR Compliance</span>
          </div>

          <div className="footer__top__left__links">
            <h5>SOCIAL</h5>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>YouTube</span>
          </div>
        </div>

        <div className="footer__top__right">
          <div className="footer__top__right__links line">
            <h5>Mail Us:</h5>
            <span>Flipkart Internet Private Limited,</span>
            <span>Building Alyssa, Begonia &</span>
            <span>Clove Embassy Tech Village,</span>
            <span>Outer Ring Road, Devarabeesanahalli Village,</span>
            <span>Bengaluru, 560103,</span>
            <span>Karnataka, India</span>
          </div>

          <div className="footer__top__right__links">
            <h5>Registered Office Address:</h5>
            <span>Flipkart Internet Private Limited,</span>
            <span>Buildings Alyssa, Begonia &</span>
            <span>Clove Embassy Tech Village,</span>
            <span>Outer Ring Road, Devarabeesanahalli Village,</span>
            <span>Bengaluru, 560103,</span>
            <span>Karnataka, India</span>
            <span>CIN : U51109KA2012PTC066107</span>
            <span>Telephone: 044-45614700</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div>
          <BsBagFill className="footer__icons" />
          <span>Become a Seller</span>
        </div>
        <div>
          <AiFillStar className="footer__icons" />
          <span>Advertise</span>
        </div>
        <div>
          <FaGift className="footer__icons" />
          <span>Gift Cards</span>
        </div>
        <div>
          <BiHelpCircle className="footer__icons" />
          <span>Help Center</span>
        </div>
        <div>
          <span>© 2007-2023 Flipkart.com</span>
        </div>
        <img src={CARDS} alt="cards" />
      </div>
    </div>
  );
};

export default Footer;
