'use client';

import React from 'react';
import { ProductContext } from './Product';

const Title = () => {
  const { product } = React.useContext(ProductContext);

  return <div>{product?.title ?? 'loading'}</div>;
};

export default Title;
