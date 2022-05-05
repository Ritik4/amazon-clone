import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const onAddToBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <CurrencyFormat
            className="price"
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            prefix={"$"}
          />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="camera" />
      <button onClick={onAddToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
