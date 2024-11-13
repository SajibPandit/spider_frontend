"use-client";
import Product from "@/components/Product/Product";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function MoreProducts({ product }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://backend.spiderpie.com/api/v1/products/seller/${product.body.product.seller._id}`
      );
      const data = await response.json();
      setProducts(data.body.products);
      console.log("form prod".data);
    }
    fetchData();
  }, [product]);

  return (
    <div>
      <Grid container spacing={2}>
        {products.map((prod) => (
          <Grid item key={prod?.id} md={6} sm={12}>
            <Product product={prod} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
