import React from "react";
import "./Header.css";
import { Container } from "../Container/Container";

export const Header = () => {
  return (
    <header className="Header">
      <Container>Header
        <a href="/login">Login page</a>
      </Container>
    </header>
  );
};
