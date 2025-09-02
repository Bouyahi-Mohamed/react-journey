import styles from "../styles/pages/checkout/checkout.module.css";
import { useState } from "react";
export default function CheckoutList({ carts }) {

  const today = new Date();
  // Manage delivery option per cart item
  const [selectedDeliveryOptions, setSelectedDeliveryOptions] = useState(
    carts.reduce((acc, cart) => {
      acc[cart.id] = { id: 1, day: today.toLocaleDateString("en-GB"), price: "FREE Shipping" };
      return acc;
    }, {})
  );

  const deliveryOptions = [
    { id: 1, day: today.toLocaleDateString("en-US", {
  weekday: "long",   
  month: "long",     
  day: "numeric"     
}), price: "FREE Shipping" },
    { id: 2, day: new Date(new Date().setDate(today.getDate() + 4)).toLocaleDateString("en-US", {
  weekday: "long",   
  month: "long",     
  day: "numeric"     
}), price: "$4.99 - Shipping" },
    { id: 3, day: new Date(new Date().setDate(today.getDate() + 7)).toLocaleDateString("en-US", {
  weekday: "long",   
  month: "long",     
  day: "numeric"     
}), price: "$9.99 - Shipping" }
  ];

  let cartItems = carts.map((cart) => (
    <div className={styles["cart-item-container"]} key={cart.id}>
      <div className={styles["delivery-date"]}>
       Delivery date: {selectedDeliveryOptions[cart.id]?.day || today.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric"
})}
      </div>
      <div className={styles["cart-item-details-grid"]}>
        <img
          className={styles["product-image"]}
          src={require(`../${cart.image}`)}
        />

        <div className={styles["cart-item-details"]}>
          <div className={styles["product-name"]}>{cart.name}</div>
          <div className={styles["product-price"]}>{cart.price}</div>
          <div className={styles["product-quantity"]}>
            <span>
              Quantity:{" "}
              <span className={styles[`quantity-label`]}> {cart.quantity}{" "}</span>
            </span>
            <span
              className={`${styles["update-quantity-link"]} ${"link-primary"}`}
            >
              Update{" "}
            </span>
            <span
              className={`${styles["delete-quantity-link"]} ${"link-primary"}`}
            >
              Delete{" "}
            </span>
          </div>
        </div>

        <div className={styles["delivery-options"]}>
          <div className={styles["delivery-options-title"]}>
            Choose a delivery option:
          </div>
          {deliveryOptions.map((option) => (
            <div className={styles["delivery-option"]} key={option.id}>
              <input
                type="radio"
                className={styles["delivery-option-input"]}
                name={`delivery-option-${cart.id}`}
                value={option.id}
                checked={selectedDeliveryOptions[cart.id]?.id === option.id}
                onChange={() =>
                  setSelectedDeliveryOptions((prev) => ({
                    ...prev,
                    [cart.id]: option
                  }))
                }
              />
              <div>
                <div className={styles["delivery-option-date"]}>
                  {option.day}
                </div>
                <div className={styles["delivery-option-price"]}>
                  {option.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className={styles.main}>
        <div className={styles["page-title"]}>Review your order</div>

        <div className={styles["checkout-grid"]}>
          <div className={styles["order-summary"]}>{cartItems}</div>

          <div className={styles["payment-summary"]}>
            <div className={styles["payment-summary-title"]}>Order Summary</div>

            <div className={styles["payment-summary-row"]}>
              <div>Items (3):</div>
              <div className={styles["payment-summary-money"]}>$42.75</div>
            </div>

            <div className={styles["payment-summary-row"]}>
              <div>Shipping &amp; handling:</div>
              <div className={styles["payment-summary-money"]}>$4.99</div>
            </div>

            <div
              className={`${styles["payment-summary-row"]} ${styles["subtotal-row"]}`}
            >
              <div>Total before tax:</div>
              <div className={styles["payment-summary-money"]}>$47.74</div>
            </div>

            <div className={styles["payment-summary-row"]}>
              <div>Estimated tax (10%):</div>
              <div className={styles["payment-summary-money"]}>$4.77</div>
            </div>

            <div
              className={`${styles["payment-summary-row"]} ${styles["total-row"]}`}
            >
              <div>Order total:</div>
              <div className={styles["payment-summary-money"]}>$52.51</div>
            </div>

            <button
              className={`${styles["place-order-button"]} ${"button-primary"}`}
            >
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
