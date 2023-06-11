import React from "react";
import "./home.css";
import Layout from "../Layout/Layout";
import { data } from "../../data/data";
import Product from "../product/product";
const Home = () => {
  return (
    <Layout>
      <div className="home__root">
        <div className="product__list">
          {data.map((item) => (
            <div className="each__product" key={item.id}>
              <Product
                title={item.title}
                name={item.name}
                cpu={item.cpu}
                camera={item.camera}
                size={item.size}
                weight={item.weight}
                display={item.display}
                image={item.image}
                price={item.price}
                description={item.description}
                battery={item.battery}
                memory={item.memory}
                delivery={item.delivery}
                instock={item.instock}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
