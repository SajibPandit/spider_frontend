"use client";
import React, { useState, useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Product from "../Product/Product";

function TrendingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://backend.spiderpie.com/api/v1/products?limit=12"
      );
      const data = await response.json();
      setProducts(data.body.products);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <Box sx={{ padding: "20px 0" }}>
        <Typography variant="h6">Trending Products</Typography>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            "@1.70": {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product?.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
}

export default TrendingProducts;
