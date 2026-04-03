export default function Cart({ cart = [], removeFromCart, handleCheckout }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-panel">
      <h3 className="cart-title">Your Cart</h3>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-left">
                  {item.icon && (
                    <img src={item.icon} alt={item.name} className="cart-item-icon" />
                  )}

                  <div className="cart-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                </div>

                <button className="cart-remove" onClick={() => removeFromCart(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total-label">Total:</div>
            <div className="cart-total-value">${totalPrice}</div>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}