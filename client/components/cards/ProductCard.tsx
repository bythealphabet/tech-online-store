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

    display: flex;
    flex-direction: column;

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
        <p> Reviews (4)</p>
      </div>
      <p className="description">
        Ex Display: MSI Pro 16 Flex-036AU 15. MultiTouch all-in-on...
      </p>
      <div className="price-box">
        <p className="old-price"> Naf499.00</p>
        <p className="price"> Naf399.00</p>
      </div>
    </div>
  );
}
export default ProductCard;
