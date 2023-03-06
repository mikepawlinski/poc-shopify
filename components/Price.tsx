'use client';

import React from 'react';
import { ProductContext } from './Product';

const Price = () => {
  const { product } = React.useContext(ProductContext);

  return <div>{product?.variants.nodes[0].price.amount ?? 'loading'}</div>;
};

export default Price;
