import React, { useState } from "react";
import { useDispatch } from "react-redux";
import methodAPI from "../redux/Action";

const Form = ({ refreshProducts }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await dispatch(methodAPI.post(formData)); // Post the new product
    refreshProducts(); // Refresh the product list
    setFormData({
      image: "",
      title: "",
      price: "",
      category: "",
    }); // Reset the form
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px" }}
            htmlFor="image"
          >
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px" }}
            htmlFor="title"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px" }}
            htmlFor="price"
          >
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label
            style={{ display: "block", marginBottom: "8px" }}
            htmlFor="category"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#172831",
            color: "#fff",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
