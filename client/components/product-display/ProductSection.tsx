import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import { Link } from "react-router-dom";
import ProductCard from "../cards/ProductCard";

function ProductSection({
  banner,
  label,
  productsPath,
  sectionUrl,
  productsArray,
}: {
  banner?: string;
  label?: string;
  productsPath?: string;
  sectionUrl?: string;
  productsArray?: {}[];
}) {
  const [productsState, setProductsState] = useState();

  useEffect(() => {
    if (productsArray?.length > 5) {
      const newProductArray = productsArray?.slice(0, 5);

      setProductsState(newProductArray);
    }
  }, []);

  const style = css`
    display: grid;
    grid-template-rows: 20px minmax(${banner ? "80px" : "0"}, auto) 40px auto;
    grid-gap: 0.5em 0em;

    grid-column: 1 / -1;

    .banner {
      overflow: hidden;
      grid-column: 2 / -2;
      grid-row: 2;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media (min-width: 900px) {
        display: flex;
        justify-content: center;
      }
    }

    .products-title {
      font-size: 1.3rem;
      font-weight: bold;
      grid-column: 2 / 6;
      grid-row: 3;
      align-self: flex-end;
      @media (min-width: 900px) {
        grid-column: 2 / span 2;
      }
    }

    .see-products {
      font-size: 0.8rem;
      word-spacing: 0;
      grid-column: 5 / -2;
      grid-row: 3;
      align-self: flex-end;
      text-align: right;
      text-decoration: underline;

      @media (min-width: 900px) {
        grid-column: 4;
      }
    }

    .products-carousel {
      width: 100%;

      grid-column: 1 / -1;
      grid-row: 5;
      justify-self: center;

      @media (min-width: 900px) {
        grid-column: 2 / -2;
      }

      .product-box {
        overflow-y: hidden;
        overflow-x: scroll;

        display: grid;
        grid-template-columns: repeat(${productsState?.length}, 1fr);

        grid-column: 1 / -1;

        scrollbar-width: none;
        padding: 1em 0;

        > * {
          margin-right: 0.5em;
        }

        :first-of-type {
          padding-left: 0.5em;
        }

        @media (min-width: 900px) {
        }

        :after {
          content: "";
          width: 1em;
        }
      }
    }
  `;

  return (
    <section className="product-section base-grid" css={style}>
      {banner && <div className="banner">{<img src={banner} alt="" />}</div>}
      <h3 className="products-title">{label}</h3>
      <Link className="see-products" to={productsPath} to="products-id/">
        {sectionUrl}
      </Link>
      <div className="products-carousel">
        <div className="product-box no-scrollbar">
          {productsState?.map((prod) => {
            return <ProductCard key={prod.prodId} {...prod} />;
          })}
        </div>
      </div>
    </section>
  );
}
export default ProductSection;
