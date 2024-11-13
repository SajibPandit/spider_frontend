"use client";
import { Box, Tab } from "@mui/material";
import { useState } from "react";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import ProductInfo from "./components/ProductInfo";
import ShopInfo from "./components/ShopInfo";
import MoreProducts from "./components/MoreProducts";

export default function ProductDetails({ product }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            variant="fullWidth"
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Product" value="1" />
            <Tab label="About Shop" value="2" />
            <Tab label="More" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ProductInfo product={product} />
        </TabPanel>
        <TabPanel value="2">
          <ShopInfo product={product} />
        </TabPanel>
        <TabPanel value="3">
          <MoreProducts product={product} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
