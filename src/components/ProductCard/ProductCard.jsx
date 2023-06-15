import React from "react";
import "./ProductCard.css";
import { CardLike } from "../../ui/CardLike/CardLike";
import { Discount } from "../../ui/Discount/Discount";
import { CardPrice } from "../../ui/CardPrice/CardPrice";
import { Button } from "../../ui/Button/Button";
import { CardRate } from "../../ui/CardRate/CardRate";

export const ProductCard = (props) => {
  const {
    imgSmall,
    imgLarge,
    imgAlt,
    discount,
    typeCard,
    priceCountCard,
    currency,
    typeBasic,
    priceCountBasic,
    description,
    rate,
  } = props;

  return (
    <div className="ProductCard">
      <div className="ProductCard__img-wrapper">
        <img
          srcSet={`${imgSmall} 1x, ${imgLarge} 2x`}
          alt={imgAlt}
          className="ProductCard__img"
        />
        <CardLike className="card-like" />
        <Discount discount={discount} className="card-discount" />
      </div>
      <div className="ProductCard__main">
        <div className="main__price-wrapper">
          <CardPrice
            priceCount={priceCountCard}
            currency={currency}
            type={typeCard}
          />
          <CardPrice
            priceCount={priceCountBasic}
            currency={currency}
            type={typeBasic}
          />
        </div>
        <div className="main__price-types">
          <span className="gray">С картой</span>
          <span className="gray">Обычная</span>
        </div>
        <p className="main__description">{description}</p>
        <CardRate className="main__rate" rate={rate} />
        <Button>В корзину</Button>
      </div>
    </div>
  );
};
