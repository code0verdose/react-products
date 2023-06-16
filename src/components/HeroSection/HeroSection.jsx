import React from "react";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { ProductCard } from "../ProductCard/ProductCard";
import imgSmall from "./assets/image.webp";
import imgLarge from "./assets/image@2x.webp";
import { products } from "./data/cardsData";
import { ProductsGrid } from "../../layout/ProductsGrid/ProductsGrid";

export const HeroSection = () => {

  const productList = products.map((el) => (
    <ProductCard canBuy={el.qty > 0} {...el} />
  ));

  const productsInStock = productList.filter(el => el.props.canBuy)


  return (
    <Section>
      <Container>
        <SectionTitle text="HeroSection" />
        <ProductsGrid>{productsInStock}</ProductsGrid>
      </Container>
    </Section>
  );
};
