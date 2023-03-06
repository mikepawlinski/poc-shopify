type Product = {
  id: string;
  title: string;
  variants: {
    nodes: {
      sku: string;
    }[];
  };
};
