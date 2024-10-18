"use client";
const {
  Container,
  Grid,
  Typography,
  Stack,
  Button,
  Drawer,
} = require("@mui/material");
import TuneIcon from "@mui/icons-material/Tune";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React, { useEffect } from "react";
import FilterDrawer from "../layouts/FilterDrawer";
import Product from "../Product/Product";
// import "./FilterProducts.css";

function FilterProducts() {
  const [open, setOpen] = React.useState(false);
  const [locationText, setLocationText] = React.useState("");
  const [error, setError] = React.useState("");

  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://backend.spiderpie.com/api/v1/products?limit=15"
      );
      const data = await response.json();
      setProducts(data.body.products);
      console.log(data);
    }
    fetchData();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("cords", latitude, longitude);
        const location = await reverseGeocode(latitude, longitude);
        setLocationText(location);
      },
      (err) => {
        setError(err.message);
      }
    );
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      return data.display_name; // This gives the full address as text
    } catch (error) {
      setError("Failed to fetch location details.");
      return "";
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Container maxWidth="lg" className="filter_container">
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <FilterDrawer toggleDrawer={toggleDrawer} />
        </Drawer>
        <Grid container spacing={1}>
          <Grid container item md={12} justifyContent="space-between">
            <Typography variant="h6">All Items</Typography>
            <Stack gap={2} direction={"row"}>
              <Button variant="outlined" startIcon={<LocationOnIcon />}>
                {locationText.split(",")[0]}
              </Button>
              <Button
                variant="outlined"
                startIcon={<TuneIcon />}
                onClick={toggleDrawer(true)}
              >
                Filter
              </Button>
            </Stack>
          </Grid>

          {products.map((prod) => (
            <Grid item key={prod?.id} xl={2} md={2.4} sm={3} xs={6}>
              <Product product={prod} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default FilterProducts;
