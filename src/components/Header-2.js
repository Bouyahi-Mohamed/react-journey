
import '../styles/pages/checkout/checkout-header.css'
import { Link } from "react-router-dom";
export default function Header2() {
  return (
   <>
       <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="amazon-logo" src={require("../images/amazon-logo.png")} />
            <img className="amazon-mobile-logo" src={require("../images/amazon-mobile-logo.png")} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">3 items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={require("../images/icons/checkout-lock-icon.png")} />
        </div>
      </div>
    </div>
   </>
  );
}
