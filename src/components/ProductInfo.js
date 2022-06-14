import './ProductInfo.css';
import iconmusic from "../images/iconmusic.svg";
import {useState} from "react";


function ProductInfo() {

  const [currentPlan , newPlan] = useState("Annual Plan");

  function changePlanHandler() {
    newPlan("Monthly Plan");
  }

    return (
      <div className="productInfo">
        <img className="musicicon" src={iconmusic} alt="music icon"></img>
        <div className="producttext">
          <p className="plan">{currentPlan}</p>
          <p>$59.99/year</p>
        </div>
        <a onClick={changePlanHandler}>Change</a>
      </div>
    );
}

export default ProductInfo;