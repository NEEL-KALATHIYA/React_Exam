import React, { useState } from "react";
import "../css/ProductUI.css";
import { useDispatch } from "react-redux";
import methodAPI from "../redux/Action";

const ProductUI = ({ id, image, title, price, category, refreshProducts }) => {
  const dispatch = useDispatch();

  // State to toggle the edit mode and hold updated data
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id,
    image,
    title,
    price,
    category,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleUpdate = async () => {
    await dispatch(methodAPI.patch(updatedData)); // Dispatch update action
    refreshProducts(); // Refresh the product list
    setIsEditing(false); // Close the edit mode
  };

  return (
    <div className="product-card" id={id}>
      {!isEditing ? (
        <>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <div className="button-container">
            <button onClick={() => setIsEditing(true)}>Update Product</button>
            <button
              onClick={async () => {
                await dispatch(methodAPI.delete(id));
                refreshProducts();
              }}
            >
              Remove Product
            </button>
          </div>
        </>
      ) : (
        // Render editable form if in editing mode
        <div className="edit-form">
          <input
            type="text"
            name="title"
            value={updatedData.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="number"
            name="price"
            value={updatedData.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <input
            type="text"
            name="image"
            value={updatedData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
          />
          <select
            name="category"
            value={updatedData.category}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </select>
          <button onClick={handleUpdate}>Save Changes</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ProductUI;
