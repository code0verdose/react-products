import React from "react";
import "./CardLike.css";
import dislike from "./assets/empty-like.svg";
import like from "./assets/fill-like.svg";

export const CardLike = ({
  className,
  isLiked,
  likeProduct,
  dislikeProduct,
  id,
}) => {
  const innerClassName = ["CardLike", className];

  return (
    <button
      onClick={() => (isLiked ? dislikeProduct(id) : likeProduct(id))}
      className={innerClassName.join(" ")}
    >
      <img src={!isLiked ? dislike : like} alt="<3" />
    </button>
  );
};
