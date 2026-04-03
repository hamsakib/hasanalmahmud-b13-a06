export default function Cart({ cart = [], removeFromCart, handleCheckout }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-panel">
      <h2 style={{ marginTop: 0, marginBottom: "8px" }}>Your Cart</h2>
      <p style={{ color: "#7b8190", marginBottom: "24px" }}>
        Selected Items: {cart.length}
      </p>

      {cart.length === 0 ? (
        <p style={{ color: "#7b8190" }}>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <div className="cart-left">
                {item.icon && (
                  <img src={item.icon} alt={item.name} className="cart-item-icon" />
                )}
                <div>
                  <div style={{ fontWeight: 800 }}>{item.name}</div>
                  <div style={{ color: "#7b8190", marginTop: "4px" }}>${item.price}</div>
                </div>
              </div>

              <button className="cart-remove" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <div style={{ fontWeight: 800, fontSize: "22px" }}>Total: ${totalPrice}</div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}