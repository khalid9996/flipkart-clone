import React, { useEffect, useState } from "react";
import "./nav.css";
import LOGO from "../../assets/logo.png";
import { GoSearch } from "react-icons/go";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateProvider";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

const Nav = () => {
  const [{ user }, dispatch] = useStateValue();

  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
  };

  return (
    <>
      <div className="nav">
        <img src={LOGO} alt="logo" />
        <div className="nav__search">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <GoSearch className="icon" />
        </div>
        <div className="nav__buttons">
          {/* <span className="lgn__btn">Login</span> */}

          {/* TESTING */}
          {user === null && (
            <Link to="/login" style={linkStyle}>
              <div className="nav__lgn__div">
                <span className="nav__lgn">Login</span>
              </div>
            </Link>
          )}

          {user !== null && (
            <Link style={linkStyle}>
              <div className="nav__lgn__div" onClick={handleLogout}>
                <span className="nav__lgn">Logout</span>
              </div>
            </Link>
          )}
          {/* TESTING */}

          <Link to="" style={linkStyle}>
            <div className="nav__btn__div">
              <span className="nav__btns">Become a Seller</span>
            </div>
          </Link>
          <Link to="" style={linkStyle}>
            <div className="nav__btn__div">
              <span className="nav__btns">More</span>
            </div>
          </Link>
          <Link to="/cart" style={linkStyle}>
            <div className="nav__btn__div">
              <BsFillCartFill />
              <span className="nav__btns">Cart</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
