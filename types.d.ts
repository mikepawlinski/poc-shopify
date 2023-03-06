type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  images: {
    nodes: {
      src: string;
    }
  }[];
  variants: {
    nodes: {
      sku: string;
      title: string;
      image: {
        src: string;
      };
      price: {
        amount: string
      }
    }[];
  };
};
