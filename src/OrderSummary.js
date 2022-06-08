import "./OrderSummary.css";
import illustrationhero from "./images/illustrationhero.svg";
import iconmusic from "./images/iconmusic.svg";

function OrderSummary() {

    return (
      <div className="orderCard">
        <img className="image" src={illustrationhero} alt="dancing woman"></img>
        <div className="orderText">
          <h2>Order Summary</h2>
          <p>
            You can listen to millions of songs,
            <br></br>audiobooks and podcasts on any device
            <br></br> anywhere you like!
          </p>
        </div>

        <div className="productInfo">
          <img className="musicicon" src={iconmusic} alt="music icon"></img>
          <div className="producttext">
            <p className="plan">Annual Plan</p>
            <p>$59.99/year</p>
          </div>
          <a href="#">Change</a>
        </div>

        <div className="buttons">
          <button className="paymentbtn">Proceed to Payment</button>
          <a className="cancelbtn">Cancel Order</a>
        </div>
      </div>
    );
    
}

export default OrderSummary;