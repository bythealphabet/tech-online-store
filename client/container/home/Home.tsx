import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/react"; /** @jsx jsx */
import ProductSection from "../../components/product-display/ProductSection";
import { newProducts, customeProducts, laptops } from "./productTestObj";
import * as brand0 from "../../assets/img/brand0.jpg";
import brand1 from "../../assets/img/brand1.jpg";
import brand2 from "../../assets/img/brand2.jpg";
import brand3 from "../../assets/img/brand3.jpg";
import brand4 from "../../assets/img/brand4.jpg";
import brand5 from "../../assets/img/brand5.jpg";
import brand6 from "../../assets/img/brand6.jpg";
import LeaveReviewBtn from "../../components/buttons/LeavReviewBtn";
import CirclesSvg from "../../components/svgs/CirclesSvg";
import ProductSupportSvg from "../../components/svgs/ProductSuportSvg";
import DiscountSvg from "../../components/svgs/DiscountSvg";
import AccountSvg from "../../components/svgs/AccountSvg";

const brandsArray = [brand0, brand1, brand2, brand3, brand4, brand5, brand6];

function Home() {
  const homeStyle = css`
    grid-column: 1 / -1;

    .brands-section {
      margin: 2em 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      grid-column: 2 / -2;

      @media (min-width: 900px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
      }
    }

    .reviews-section {
      margin: 2em 0;
      padding: 5em 0 2em 0;
      grid-column: 1 / -1;
      background-color: #ccc;

      display: flex;
      flex-direction: column;

      article,
      .reviewers-name,
      button {
        max-width: 500px;
        align-self: center;
      }

      article {
        order: 1;
        display: flex;
        padding: 1em;
        span {
          display: block;
          font-size: 5rem;
          line-height: 0.5;
        }
      }

      .reviewers-name {
        order: 2;
        padding: 0 2em;
        margin-bottom: 2em;
        text-align: right;
        font-weight: bold;
        align-self: flex-end;

        @media (min-width: 600px) {
          align-self: center;
        }
      }
    }

    .extra-service {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-column: 2 / -2;
      padding: 2em 0;

      @media (min-width: 900px) {
        flex-direction: row;
        padding: 5em 0;

        grid-column: 3 / -3;
        justify-content: space-evenly;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: center;
        /* margin-bottom: 1em; */
        padding: 1em;
        max-width: 300px;

        h4 {
          margin: 0.3em 0;
          font-weight: 700;
          font-size: 1rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  `;

  return (
    <main className="base-grid" css={homeStyle}>
      <ProductSection {...newProducts} />
      <ProductSection {...customeProducts} />
      <ProductSection {...laptops} />

      <div className="brands-section">
        {brandsArray.map((img) => {
          return <img key={img} src={img} alt="" className="brand-img" />;
        })}
      </div>

      <div className="reviews-section">
        <article>
          <span>&ldquo;</span>
          <p>
            My first order arrived today in perfect condition. From the time I
            sent a question about the item to making the purchase, to the
            shipping and now the delivery, your company, Tecs, has stayed in
            touch. Such great service. I look forward to shopping on your site
            in the future and would highly recommend it.
          </p>
        </article>
        <p className="reviewers-name">- Ravi from Raptronic</p>
        <LeaveReviewBtn
          position={css`
            order: 4;
            margin: 2em;
            max-width: 200px;
            align-self: center;
          `}
        />
        <CirclesSvg
          position={css`
            order: 3;
            align-self: center;
            margin-right: 2em;
            margin: 1em 0 0 2em;
          `}
        />
      </div>

      <div className="extra-service">
        <div className="info">
          <ProductSupportSvg />
          <h4>Product Support</h4>
          <p>
            Up to 3 years on-site warranty available for your peace of mind.
          </p>
        </div>
        <div className="info">
          <ProductSupportSvg />
          <h4>Personal Account</h4>
          <p>
            With big discounts, free delivery and a dedicated support
            specialist.
          </p>
        </div>
        <div className="info">
          <AccountSvg />
          <h4>Amazing Savings</h4>
          <p>Up to 70% off new Products, you can be sure of the best price.</p>
        </div>
      </div>
    </main>
  );
}
export default Home;
