import React, { useEffect, useState } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ name: "", sku: "", price: "", category: "" });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/products", formData);
    setFormData({ name: "", sku: "", price: "", category: "" });
    fetchProducts();
  };

  return (
    <div>
      <h2>Product Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" onChange={handleChange} value={formData.name} />
        <input name="sku" placeholder="SKU" onChange={handleChange} value={formData.sku} />
        <input name="price" placeholder="Price" onChange={handleChange} value={formData.price} />
        <input name="category" placeholder="Category" onChange={handleChange} value={formData.category} />
        <button type="submit">Add Product</button>
      </form>

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id}>
              <td>{prod.name}</td>
              <td>{prod.sku}</td>
              <td>{prod.price}</td>
              <td>{prod.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
