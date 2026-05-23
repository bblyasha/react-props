import React, { useState } from "react";

function CartComponent() {
  const [cart, setCart] = useState([
    { id: 1, title: "T-Shirt", count: 1 },
    { id: 2, title: "Cap", count: 2 },
  ]);

  const increaseCount = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Cart</h2>

      <ul>
        {cart.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.title} (Amount: {item.count})
            <button
              onClick={() => increaseCount(item.id)}
              style={{ marginLeft: "10px" }}
            >
              +1
            </button>
            <button
              onClick={() => removeItem(item.id)}
              style={{ marginLeft: "5px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart}>Clean Cart</button>
    </div>
  );
}

export default CartComponent;
