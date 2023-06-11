import React from "react";
import "./product.css";
import ASSURED from "../../assets/assured.png";
const product = ({
  title,
  name,
  cpu,
  camera,
  size,
  weight,
  display,
  image,
  price,
  description,
  battery,
  memory,
  delivery,
  instock,
}) => {
  return (
    <div className="product__root">
      <div className="product__image">
        <img src={image[1]} alt={title} />
      </div>

      <div className="product__info">
        <h4>{title}</h4>
        <div>
          <span>• {name}</span>
          <span>• {price}</span>
          <span>• {cpu}</span>
          <span>• {camera} </span>
          <span>• {size}</span>
          <span>• {weight}</span>
          <span>• {display}</span>
          <span>• {battery}</span>
          <span>• {memory}</span>
          <span>• {delivery}</span>
          <span>• {instock ? "In Stock" : "Out of Stock"}</span>
        </div>
      </div>

      <div className="product__price">
        <span>₹{price}</span>
        <img src={ASSURED} alt="flipkart-assured" />
      </div>
    </div>
  );
};

export default product;
