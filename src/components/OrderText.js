import "./OrderText.css";
import {useState} from 'react';

function OrderText (){

  const [title , setTitle] = useState("Order Summary");

  const changeTitleHandler = () => {
    setTitle("Rhidi's Order Summary");

  };

    return (
      <div className="orderText">
        <h2 onClick={changeTitleHandler}>{title}</h2>
        <p>
          You can listen to millions of songs,
          <br></br>audiobooks and podcasts on any device
          <br></br> anywhere you like!
        </p>
      </div>
    );
}

export default OrderText;