import styles from "../styles/pages/checkout/checkout.module.css";
export default function CheckoutList() {
  return (
    <>
<div className={styles.main}>
      <div className={styles["page-title"]}>Review your order</div>

      <div className={styles["checkout-grid"]}>
        <div className={styles["order-summary"]}>
          <div className={styles["cart-item-container"]}>
            <div className={styles["delivery-date"]}>
              Delivery date: Tuesday, June 21
            </div>

            <div className={styles["cart-item-details-grid"]}>
              <img className={styles["product-image"]}
                src={require("../images/products/athletic-cotton-socks-6-pairs.jpg")} />

              <div className={styles["cart-item-details"]}>
                <div className={styles["product-name"]}>
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className={styles["product-price"]}>
                  $10.90
                </div>
                <div className={styles["product-quantity"]}>
                  <span>
                    Quantity: <span className={styles["quantity-label"]}>2</span>
                  </span>
                  <span className={styles["update-quantity-link"]}>
                    Update
                  </span>
                  <span className={styles["delete-quantity-link"]}>
                    Delete
                  </span>
                </div>
              </div>

              <div className={styles["delivery-options"]}>
                <div className={styles["delivery-options-title"]}>
                  Choose a delivery option:
                </div>
                <div className={styles["delivery-option"]}>
                  <input type="radio" defaultChecked
                    className={styles["delivery-option-input"]}
                    name="delivery-option-1" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Tuesday, June 21
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className={styles["delivery-option"]}>
                  <input type="radio"
                    className={styles["delivery-option-input"]}
                    name="delivery-option-1" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Wednesday, June 15
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className={styles["delivery-option"]}>
                  <input type="radio"
                    className={styles["delivery-option-input"]}
                    name="delivery-option-1" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Monday, June 13
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["cart-item-container"]}>
            <div className={styles["delivery-date"]}>
              Delivery date: Wednesday, June 15
            </div>

            <div className={styles["cart-item-details-grid"]}>
              <img className={styles["product-image"]}
                src={require("../images/products/intermediate-composite-basketball.jpg")} />

              <div className={styles["cart-item-details"]}>
                <div className={styles["product-name"]}>
                  Intermediate Size Basketball
                </div>
                <div className={styles["product-price"]}>
                  $20.95
                </div>
                <div className={styles["product-quantity"]}>
                  <span>
                    Quantity: <span className={styles["quantity-label"]}>1</span>
                  </span>
                  <span className={styles["update-quantity-link"]}>
                    Update
                  </span>
                  <span className={styles["delete-quantity-link"]}>
                    Delete
                  </span>
                </div>
              </div>

              <div className={styles["delivery-options"]}>
                <div className={styles["delivery-options-title"]}>
                  Choose a delivery option:
                </div>

                <div className={styles["delivery-option"]}>
                  <input type="radio" className={styles["delivery-option-input"]}
                    name="delivery-option-2" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Tuesday, June 21
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div className={styles["delivery-option"]}>
                  <input type="radio" defaultChecked className={styles["delivery-option-input"]}
                    name="delivery-option-2" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Wednesday, June 15
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div className={styles["delivery-option"]}>
                  <input type="radio" className={styles["delivery-option-input"]}
                    name="delivery-option-2" />
                  <div>
                    <div className={styles["delivery-option-date"]}>
                      Monday, June 13
                    </div>
                    <div className={styles["delivery-option-price"]}>
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["payment-summary"]}>
          <div className={styles["payment-summary-title"]}>
            Order Summary
          </div>

          <div className={styles["payment-summary-row"]}>
            <div>Items (3):</div>
            <div className={styles["payment-summary-money"]}>$42.75</div>
          </div>

          <div className={styles["payment-summary-row"]}>
            <div>Shipping &amp; handling:</div>
            <div className={styles["payment-summary-money"]}>$4.99</div>
          </div>

          <div className={`${styles["payment-summary-row"]} ${styles["subtotal-row"]}`}>
            <div>Total before tax:</div>
            <div className={styles["payment-summary-money"]}>$47.74</div>
          </div>

          <div className={styles["payment-summary-row"]}>
            <div>Estimated tax (10%):</div>
            <div className={styles["payment-summary-money"]}>$4.77</div>
          </div>

          <div className={`${styles["payment-summary-row"]} ${styles["total-row"]}`}>
            <div>Order total:</div>
            <div className={styles["payment-summary-money"]}>$52.51</div>
          </div>

          <button className={`${styles["place-order-button"]} ${"button-primary"}`}>
            Place your order
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
