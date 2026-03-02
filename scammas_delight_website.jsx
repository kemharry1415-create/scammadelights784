import React, { useState, useMemo } from "react";

// Route/Link name: /scammadelights784
// File name suggestion: scammadelights784.tsx

const productsData = [
  { name: "Coffee", price: 5.99, status: "Active", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Hot Chocolate", price: 9.0, status: "Inactive", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { name: "Carrot Cake", price: 8.6, status: "Active", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587" },
  { name: "Latte", price: 7.5, status: "Active", image: "https://images.unsplash.com/photo-1523942839745-7848d5c3a5df" },
  { name: "Sweetbread", price: 2.5, status: "Active", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
  { name: "Iced Tea", price: 4.0, status: "Inactive", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e" },
  { name: "Red Velvet Cake", price: 9.5, status: "Inactive", image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31" },
  { name: "Mocha", price: 8.25, status: "Active", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
  { name: "Banana Bread", price: 4.5, status: "Active", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
  { name: "Cappuccino", price: 6.75, status: "Active", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348" },
  { name: "Cheesecake", price: 10.5, status: "Inactive", image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e" },
  { name: "Brownie", price: 7.0, status: "Active", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c" },
  { name: "Herbal Tea", price: 4.75, status: "Active", image: "https://images.unsplash.com/photo-1497534446932-c925b458314e" },
  { name: "Bagel", price: 3.25, status: "Inactive", image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec" },
  { name: "Macchiato", price: 7.75, status: "Active", image: "https://images.unsplash.com/photo-1523942839745-7848d5c3a5df" },
  { name: "Donut", price: 3.5, status: "Active", image: "https://images.unsplash.com/photo-1505253213348-cd54c4b6b3c7" },
  { name: "Croissant", price: 4.0, status: "Active", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff" }
];

export default function Scammadelights784() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const addToCart = (product) => {
    if (product.status !== "Active") return;
    setCart((prev) => [...prev, product]);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    alert(`Thank you for shopping at Scamma's Delight 784!\nTotal: $${total.toFixed(2)}`);
    setCart([]);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Scamma's Delight 784</h1>
        <p>Bakery & Beverage Shop</p>
        <p style={{ fontSize: "14px" }}>Website Link: /scammadelights784</p>
      </header>

      <div style={styles.container}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <div style={styles.grid}>
          {filteredProducts.map((product, index) => (
            <div key={index} style={styles.card}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
              />
              <h3>{product.name}</h3>
              <p style={styles.price}>${product.price.toFixed(2)}</p>
              <p
                style={{
                  color: product.status === "Active" ? "green" : "red",
                  fontWeight: "bold"
                }}
              >
                {product.status}
              </p>
              <button
                onClick={() => addToCart(product)}
                style={{
                  ...styles.button,
                  opacity: product.status === "Active" ? 1 : 0.5,
                  cursor: product.status === "Active" ? "pointer" : "not-allowed"
                }}
                disabled={product.status !== "Active"}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div style={styles.cart}>
          <h2>🛒 Shopping Cart</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: ${total.toFixed(2)}</strong>
          </p>
          <button onClick={checkout} style={styles.checkoutButton}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff8f0",
    minHeight: "100vh"
  },
  header: {
    backgroundColor: "#8b4513",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },
  container: {
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px"
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "8px",
    border: "1px solid #ccc"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "15px"
  },
  card: {
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "15px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  price: {
    fontWeight: "bold",
    margin: "5px 0"
  },
  button: {
    backgroundColor: "#ffb347",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    fontWeight: "bold"
  },
  cart: {
    marginTop: "30px",
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  checkoutButton: {
    backgroundColor: "#d2691e",
    color: "white",
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};
