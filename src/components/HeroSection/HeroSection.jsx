import React, { useContext } from "react";
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
import { Link } from "react-router-dom";
import { DataProvider } from "../../app/App";
import { DataContext } from "../../app/global/providers/DataProvider";

export const HeroSection = () => {
  const likedStorageId = JSON.parse(localStorage.getItem("likedId")) ?? [];

  const [allProducts, setAllProducts] = useState([]);
  const [inStockProducts, setInStockProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [likedProductsId, setLikedProductsId] = useState(likedStorageId);

  localStorage.setItem("likedId", JSON.stringify(likedProductsId));

  const data = useContext(DataContext)

  
  console.log(data);
  // setData(['LALALALALa'])

  // const myData = useContext(DataProvider)

  // console.log(myData);

  // useEffect(() => {
  //   const resAll = fetch("http://api.codeoverdose.space/api/products/all");
  //   resAll
  //     .then((res) => res.json())
  //     .then((data) => setAllProducts(data))
  //     .catch((err) => console.log(err));

  //   const resInStock = fetch(
  //     "http://api.codeoverdose.space/api/products/instock"
  //   );
  //   resInStock
  //     .then((res) => res.json())
  //     .then((data) => setInStockProducts(data))
  //     .catch((err) => console.log(err));
  // }, []);

  const selectHandler = (evt) => {
    const newValue = evt.target.value;
    if (newValue !== selectValue) {
      setSelectValue(newValue);
    }
  };

  const likeProduct = (id) => {
    setLikedProductsId([...likedProductsId, id]);
  };

  const dislikeProduct = (id) => {
    setLikedProductsId(likedProductsId.filter((el) => el !== id));
  };

  const options = optionsData.map((el) => (
    <ProductOption key={el.id} {...el} />
  ));

  // const productList = allProducts.map((el) => (
  //   <ProductCard
  //     key={el.id}
  //     likeProduct={likeProduct}
  //     dislikeProduct={dislikeProduct}
  //     isLiked={likedProductsId.includes(el.id)}
  //     canBuy={el.qty > 0}
  //     {...el}
  //   />
  // ));

  // const productsInStock = productList.filter((el) => el.props.canBuy);

  const productsFavorites = allProducts.filter((el) =>
    likedProductsId.includes(el.id)
  );

  const productsMap = (arr) => {
    return arr.map((el) => (
      <ProductCard
        key={el.id}
        likeProduct={likeProduct}
        dislikeProduct={dislikeProduct}
        isLiked={likedProductsId.includes(el.id)}
        canBuy={el.qty > 0}
        {...el}
      />
    ));
  };

  const productsRender = () => {
    if (selectValue === "instock") {
      return productsMap(inStockProducts);
    }

    if (selectValue === "favorites") {
      return productsMap(productsFavorites);
    }

    return productsMap(allProducts);
  };

  return (
    <Section className="HeroSection">
      <Container>
        <Link to="/time">TIME</Link>
        <div className="HeroTitleWrapper">
          <SectionTitle className="HeroTitle" text="Products" />
          <ProductSelect handler={selectHandler} selectValue={selectValue}>
            {options}
          </ProductSelect>
        </div>
        <ProductsGrid className={!allProducts.length && "loading"}>
          {allProducts.length ? productsRender() : <Spinner />}
        </ProductsGrid>
      </Container>
    </Section>
  );
};
