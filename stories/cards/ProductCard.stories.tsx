import React from "react";
import ProductCard from "../../client/components/cards/ProductCard";
import { newProducts } from "../../client/container/home/productTestObj";

const product = newProducts.productsArray[0];

export default {
  title: "Card/Product Card",
  component: ProductCard,
  args { ...product },
};

export const Default = (args) => <ProductCard {...args} />;
