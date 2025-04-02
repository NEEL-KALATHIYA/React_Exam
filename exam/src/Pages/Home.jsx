import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductUI from "../components/ProductUI";
import "../css/Home.css";
import Form from "../components/Form";
import methodAPI from "../redux/Action";

const Home = () => {
  let { products } = useSelector((store) => store);
  const dispatch = useDispatch();

  // Fetch products when the component mounts
  useEffect(() => {
    refreshProducts();
  }, []);

  const refreshProducts = () => {
    dispatch(methodAPI.get());
  };

  return (
    <>
      <Form refreshProducts={refreshProducts} />
      <div className="home-container">
        {products.map(({ id, title, price, category, image }) => (
          <ProductUI
            key={id}
            title={title}
            id={id}
            price={price}
            category={category}
            image={image}
            refreshProducts={refreshProducts}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
