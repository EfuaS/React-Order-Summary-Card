import "./OrderSummary.css";
import illustrationhero from "./images/illustrationhero.svg";
import OrderText from "./components/OrderText";
import ProductInfo from "./components/ProductInfo";
import Buttons from "./components/Buttons";

function OrderSummary() {

    return (
      <div className="orderCard">
        <img className="image" src={illustrationhero} alt="dancing woman"></img>
        <OrderText></OrderText>
        <ProductInfo></ProductInfo>
        <Buttons></Buttons>
      </div>
    );
    
}

export default OrderSummary;