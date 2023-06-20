import React from "react";

export const Link = ({ children, href, title }) => {
  return (
    <a title={title} href={href}>
      {children}
    </a>
  );
};
