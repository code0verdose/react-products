import React from "react";
import { Section } from "../../layout/Section/Section";
import { Container } from "../../layout/Container/Container";
import { SectionTitle } from "../../layout/SectionTitle/SectionTitle";
import { ProductCard } from "../ProductCard/ProductCard";
import imgSmall from './assets/image.webp'
import imgLarge from './assets/image@2x.webp'

export const HeroSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle text="HeroSection" />
        <ProductCard
          priceCountCard="44,50"
          priceCountBasic="50,50"
          currency="₽"
          typeBasic="basic"
          typeCard="card"
          imgSmall={imgSmall}
          imgLarge={imgLarge}
          discount={50}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita itaque sit saepe praesentium minima repudiandae accusamus voluptate officiis vero. Tempore!"
          rate={4}
        />
        <ProductCard
          priceCountCard="40,50"
          priceCountBasic="10,50"
          currency="₽"
          typeBasic="basic"
          typeCard="card"
          imgSmall={imgSmall}
          imgLarge={imgLarge}
          discount={90}
          description="Lorem ipsum "
          rate={5}
        />
        <ProductCard
          priceCountCard="64,50"
          priceCountBasic="80,50"
          currency="$"
          typeBasic="basic"
          typeCard="card"
          imgSmall={imgSmall}
          imgLarge={imgLarge}
          discount={10}
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita itaque sit saepe praesentium minima repudiandae accusamus voluptate officiis vero. Tempore!"
          rate={1}
        />
      </Container>
    </Section>
  );
};
