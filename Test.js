import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Smartphone",
    price: 7999,
    rating: 4.5,
    category: "Electronics",
  },
  { id: 2, name: "Laptop", price: 29999, rating: 4.2, category: "Electronics" },
  { id: 3, name: "T-Shirt", price: 599, rating: 3.8, category: "Fashion" },
  { id: 4, name: "Jeans", price: 999, rating: 4.1, category: "Fashion" },
  {
    id: 5,
    name: "Book - React Guide",
    price: 399,
    rating: 4.9,
    category: "Books",
  },
  {
    id: 6,
    name: "Book - Node.js Mastery",
    price: 499,
    rating: 4.7,
    category: "Books",
  },
];

const Test = () => {
  const [price, setPrice] = useState(30000);
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const parsedRating = parseFloat(product.rating);
    return (
      product.price <= price &&
      parsedRating >= rating &&
      (category === "All" || product.category === category)
    );
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: 20,
        backgroundColor: "#f3f4f6",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        🛒 Product Filter
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        {/* Filters */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 8,
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            flex: "1 1 250px",
          }}
        >
          <h2 style={{ fontSize: 18, fontWeight: "600", marginBottom: 16 }}>
            Filters
          </h2>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{ display: "block", fontWeight: "500", marginBottom: 4 }}
            >
              Max Price: ₹{price}
            </label>
            <input
              type="range"
              min="0"
              max="30000"
              step="500"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <label
              style={{ display: "block", fontWeight: "500", marginBottom: 4 }}
            >
              Min Rating: {rating}★
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <div>
            <label
              style={{ display: "block", fontWeight: "500", marginBottom: 4 }}
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "6px 8px",
                borderRadius: 4,
                border: "1px solid #ccc",
              }}
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Books">Books</option>
            </select>
          </div>
        </div>

        {/* Products */}
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            flex: 1,
          }}
        >
          {filteredProducts.length === 0 ? (
            <p
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                color: "#666",
              }}
            >
              No products match the filters.
            </p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  backgroundColor: "#fff",
                  padding: 16,
                  borderRadius: 8,
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <h3
                  style={{ fontSize: 16, fontWeight: "bold", marginBottom: 4 }}
                >
                  {product.name}
                </h3>
                <p style={{ margin: "4px 0" }}>₹{product.price}</p>
                <p style={{ margin: "4px 0" }}>Rating: {product.rating}★</p>
                <p style={{ fontSize: 12, color: "#777" }}>
                  {product.category}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
