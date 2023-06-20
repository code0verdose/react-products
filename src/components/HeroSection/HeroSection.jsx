import React from "react";
import { useState, useEffect } from "react";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsGrid } from "../../layout/ProductsGrid/ProductsGrid";
import { Spinner } from "../../ui/Spinner/Spinner";

export const HeroSection = () => {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const res = fetch("http://localhost:5000/api/products/all");
    res.then((res) => res.json()).then((data) => setData(data)).catch(err => console.log(err));
  }, []);


  const productList = data.map((el) => (
    <ProductCard key={el.id} canBuy={el.qty > 0} {...el} />
  ));

  const productsInStock = productList.filter((el) => el.props.canBuy);

  const btnHandler = () => {
    setCounter(counter + 1);
  };

  const inputHandler = (evt) => {
    setInputValue(evt.target.value);
  };

  return (
    <Section>
      <Container>
        <input value={inputValue} type="text" onChange={inputHandler} />
        <button onClick={() => btnHandler("Ivan")}>Click</button>
        {counter}
        {inputValue}
        <SectionTitle text="HeroSection" />
        <ProductsGrid className={!productList.length && 'loading'}>
          {productList.length ? productList : <Spinner />}
        </ProductsGrid>
      </Container>
    </Section>
  );
};
