import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, IconButton } from "@mui/material";

import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RenderStars from "@/lib/helpers/renderStars";
import { orangeColor } from "@/lib/data/commonData";
import Link from "next/link";

function Product(product) {
  if (!product) return;
  return (
    <Card sx={{ margin: "10px 10px" }}>
      <Link href={`/products/${product?.product?.id}`}>
        <Box sx={{ position: "relative" }}>
          {product?.product?.thumbnail && (
            <Image
              src={`https://backend.spiderpie.com${product?.product?.thumbnail}`}
              alt={"hh"}
              // layout="fill"
              objectFit="cover"
              className="product_image"
              height={100}
              width={100}
              style={{ height: "200px", width: "100%", objectFit: "cover" }}
            />
          )}

          <IconButton
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              color: "orange",
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="p" component="div">
            {product?.product?.title}
          </Typography>
          <Box mt={2}>
            <Grid container justifyContent="space-between">
              <Typography variant="body2" color={orangeColor}>
                $99.99
              </Typography>
              <Typography variant="body2" color="text.primary">
                New
              </Typography>
            </Grid>
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              mt={1}
            >
              <Box display="flex" alignItems="center">
                <RenderStars rating={4} />
              </Box>
              <Typography variant="body2" color="text.primary">
                3.5 km
              </Typography>
            </Grid>
          </Box>
        </CardContent>
      </Link>
    </Card>
  );
}

export default Product;
