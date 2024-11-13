import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  ListItem,
  MenuItem,
  OutlinedInput,
  Rating,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ListAlt } from "@mui/icons-material";
import { orangeColor } from "@/lib/data/commonData";

export default function FilterDrawer({ toggleDrawer }) {
  const [selectedValue, setSelectedValue] = useState("bestMatch");

  const [selectedPriceValue, setSelectedPriceValue] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      let response = await fetch(
        "https://backend.spiderpie.com/api/v1/categories",
        {}
      );
      let data = await response.json();
      setCategories(data.body.data);
    };

    getCategories();
  }, []);

  const handlePriceChange = (event) => {
    setSelectedPriceValue(event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  // Array of filter options with human-readable text and camelCase value
  const filterOptions = [
    { label: "Best Match", value: "bestMatch" },
    { label: "Price Low > High", value: "priceLowHigh" },
    { label: "Price High > Low", value: "priceHighLow" },
    { label: "Distance Low > High", value: "distanceLowHigh" },
    { label: "Popularity High > Low", value: "popularityHighLow" },
    { label: "Review High > Low", value: "reviewHighLow" },
  ];

  // Handle checkbox change
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={{ width: 300, position: "relative" }} role="presentation">
      <List sx={{ paddingBottom: "70px" }}>
        <Typography variant="h5" textAlign="center" paddingY={1}>
          Sort & Filter
        </Typography>
        <Divider />
        <Card>
          <ListItem>
            <Typography
              variant="p"
              fontWeight="500"
              textAlign="center"
              padding="2"
            >
              Sort By
            </Typography>
          </ListItem>
          <ListItem>
            <FormGroup sx={{ padding: "10" }}>
              {filterOptions.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={selectedValue === option.value} // Check if this option is selected
                      onChange={handleChange} // Handle change
                      value={option.value} // Use camelCase value
                    />
                  }
                  label={
                    <Typography>
                      <strong>{option.label.split(" ")[0]}</strong>{" "}
                      {option.label.slice(option.label.indexOf(" ") + 1)}
                    </Typography>
                  }
                />
              ))}
            </FormGroup>
          </ListItem>
        </Card>

        <Card>
          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value="Price"
                  />
                }
                label="Price"
              />
            </FormGroup>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                label="Min"
                variant="outlined"
                size="small"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
              <Typography>-</Typography> {/* Dash between Min and Max fields */}
              <TextField
                label="Max"
                variant="outlined"
                size="small"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </Stack>
          </ListItem>

          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value="Price"
                  />
                }
                label="Distance"
              />
            </FormGroup>

            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">km</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              size="small"
            />
          </ListItem>

          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value="Price"
                  />
                }
                label="Min Rating"
              />
            </FormGroup>
            <Box>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Box>
          </ListItem>

          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value="Price"
                  />
                }
                label="Product Type"
              />
            </FormGroup>
            <Box>
              <FormControl fullWidth sx={{ width: "120px" }}>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Age"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>All</MenuItem>
                  <MenuItem value={20}>New</MenuItem>
                  <MenuItem value={30}>Old</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </ListItem>

          <ListItem>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value="Price"
                  />
                }
                label="Category"
              />
            </FormGroup>
          </ListItem>
          <FormGroup sx={{ marginLeft: "50px" }}>
            {categories.map((category) => (
              <FormControlLabel
                key={category._id}
                control={
                  <Checkbox
                    checked={selectedPriceValue === "Price"}
                    onChange={handleChange}
                    value={category._id}
                  />
                }
                label={category.name}
              />
            ))}
          </FormGroup>
        </Card>
      </List>

      <Box
        sx={{
          position: "fixed", // Fixed position
          bottom: 0, // Align to bottom
          //   left: 0,
          width: "320px",
          right: 0,
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          //   backgroundColor: "red",
        }}
      >
        <Button variant="contained" fullWidth>
          Apply
        </Button>
        <Button variant="contained" fullWidth>
          Reset
        </Button>
      </Box>
    </Box>
  );
}
