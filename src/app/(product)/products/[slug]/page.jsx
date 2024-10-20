// import ImageContainer from "@/components/SingleProduct/ImageContainer";
import ProductDetails from "@/components/SingleProduct/ProductDetails";
import { Container, Grid } from "@mui/material";
import { notFound } from "next/navigation";

import dynamic from "next/dynamic";

const ImageContainer = dynamic(
  () => import("@/components/SingleProduct/ImageContainer"),
  { ssr: false }
);

async function fetchProductBySlug(slug) {
  const res = await fetch(
    `https://backend.spiderpie.com/api/v1/products/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const product = await res.json();
  return product;
}

export default async function ProductPage({ params }) {
  const { slug } = params;
  console.log(slug);
  const product = await fetchProductBySlug(slug);
  console.log(product);

  // If product is not found, render a 404 page
  if (!product) {
    notFound();
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid md={6} sm={12} xs={12} item>
          <ImageContainer />
        </Grid>
        <Grid md={6} sm={12} xs={12} item>
          <ProductDetails />
        </Grid>
      </Grid>
      <h1>{product.body.product.title}</h1>
      <image
        src={`https://backend.spiderpie.com/api/v1/${product.body.product.images[0]}`}
        alt="g"
      />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </Container>
  );
}
