import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductUI from "../components/ProductUI";
import "../css/Home.css";
import Form from "../components/Form";
import methodAPI from "../redux/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

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
        {products.length > 0 ? (
          products.map(({ id, title, price, category, image }) => (
            <ProductUI
              key={id}
              title={title}
              id={id}
              price={price}
              category={category}
              image={image}
              refreshProducts={refreshProducts}
            />
          ))
        ) : (
          <h2 style={{ textAlign: "center", color: "#555" }}>
            No products available
          </h2>
        )}
      </div>
    </>
  );
};

export default Home;
