import React from "react";
import { useState, useEffect } from "react";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsGrid } from "../../layout/ProductsGrid/ProductsGrid";
import { Spinner } from "../../ui/Spinner/Spinner";
import "./HeroSection.css";
import { ProductSelect } from "../../ui/ProductSelect/ProductSelect";
import { optionsData } from "./data/optionsData";
import { ProductOption } from "../../ui/ProductOption/ProductOption";

export const HeroSection = () => {
  const likedId = JSON.parse(localStorage.getItem("likedId")) ?? [];

  const [data, setData] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [likedProducts, setLikedProducts] = useState(likedId);

  localStorage.setItem("likedId", JSON.stringify(likedProducts));

  useEffect(() => {
    const res = fetch("http://185.40.7.226:7000/api/products/all");
    res
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const selectHandler = (evt) => {
    const newValue = evt.target.value;
    if (newValue !== selectValue) {
      setSelectValue(newValue);
    }
  };

  const likeProduct = (id) => {
    setLikedProducts([...likedProducts, id]);
  };

  const dislikeProduct = (id) => {
    setLikedProducts(likedProducts.filter((el) => el !== id));
  };

  const options = optionsData.map((el) => (
    <ProductOption key={el.id} {...el} />
  ));

  const productList = data.map((el) => (
    <ProductCard
      key={el.id}
      likeProduct={likeProduct}
      dislikeProduct={dislikeProduct}
      isLiked={likedProducts.includes(el.id)}
      canBuy={el.qty > 0}
      {...el}
    />
  ));

  const productsInStock = productList.filter((el) => el.props.canBuy);

  const productsFavorites = productList.filter((el) =>
    likedProducts.includes(el.props.id)
  );

  const productsRender = () => {
    if (selectValue === "instock") {
      return productsInStock;
    }

    if (selectValue === "favorites") {
      return productsFavorites;
    }

    return productList;
  };

  return (
    <Section className="HeroSection">
      <Container>
        <div className="HeroTitleWrapper">
          <SectionTitle className="HeroTitle" text="Products" />
          <ProductSelect handler={selectHandler} selectValue={selectValue}>
            {options}
          </ProductSelect>
        </div>
        <ProductsGrid className={!productList.length && "loading"}>
          {productList.length ? productsRender() : <Spinner />}
        </ProductsGrid>
      </Container>
    </Section>
  );
};
