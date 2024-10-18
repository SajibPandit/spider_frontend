import { Box, Grid, Typography } from "@mui/material";

export default function Products() {
  return (
    <Box sx={{ padding: "10px 0", flexGrow: 1 }}>
      <Typography variant="h4">Products</Typography>

      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2}></Grid>
      </Grid>
    </Box>
  );
}
