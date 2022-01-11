import React from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import StarRatingSvg from "../svgs/StarRatingSvg";

function ProductCard({
  prodId,
  inStock,
  prodImg,
  rating,
  reviews,
  prodDesc,
  oldPrice,
  price,
}) {
  const style = css`
    padding: 1em;
    width: 234px;
    min-height: 300px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
      transform: translate3d(0px, -1px, 0px);
    }

    .stock {
      color: #67925a;
      font-size: 0.8rem;
    }

    .card-img {
      /* width: 140px; */
      /* height: 140px; */
      align-self: center;
      object-fit: cover;
    }

    .rating {
      display: flex;
      p {
        margin: 0 0.5em;
        font-size: 0.8rem;
        color: #666666;
      }
    }

    .description {
      font-size: 0.8rem;
      margin-bottom: 0.4em;

      /* font-weight: lighter; */
    }

    .price-box {
      font-size: 0.8rem;

      .old-price {
        color: #666666;
        text-decoration: line-through;
      }
    }
  `;
  return (
    <div className="card" css={style}>
      <p className="stock">{inStock ? "🟢 in stock" : "🔴 out of stock"}</p>
      <img src={prodImg} alt={prodDesc} className="card-img" />
      <div className="rating">
        <StarRatingSvg
          position={css`
            margin: 0.5em 0;
          `}
        />
        <p> Reviews ({reviews.length})</p>
      </div>
      <p className="description">{prodDesc}</p>
      <div className="price-box">
        <p className="old-price"> Naf{oldPrice}</p>
        <p className="price">Naf{price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
