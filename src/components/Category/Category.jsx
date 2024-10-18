"use client";

import {
  Box,
  Breadcrumbs,
  Card,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import "./Category.css";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";

function Category() {
  const [view, setView] = useState("scroll");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [navigation, setNavigation] = useState([]);

  //function to change category view
  const changeView = () => {
    if (view === "scroll") setView("grid");
    else setView("scroll");
    console.log(view);
  };

  const getCategories = async () => {
    let response = await fetch(
      "https://backend.spiderpie.com/api/v1/categories",
      {}
    );
    let data = await response.json();
    setCategories(data.body.data);
    setNavigation([]);
  };

  const getSingleCategory = async (categoryId) => {
    let response = await fetch(
      `https://backend.spiderpie.com/api/v1/categories/${categoryId}`,
      {}
    );
    let data = await response.json();
    if (data.body.childrens && data.body.childrens.length > 0) {
      setCategories(data.body.childrens);
    }
    setNavigation(data.body.url);
  };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  useEffect(() => {
    if (selectedCategory.length > 0) {
      getSingleCategory(selectedCategory);
    } else {
      getCategories();
    }
  }, [selectedCategory]);

  // useEffect(() => {

  //   if(selectedCategory){
  //     let response = await fetch(`https://backend.spiderpie.com/api/v1/categories/${selectedCategory}`);
  //     let data = await response.json();
  //   }
  //   const selectedCat = categories.find((cat) => cat._id === selectedCategory);

  //   if (selectedCat?.childrens && selectedCat?.childrens.length > 0) {
  //     setNavigation((prev) => [
  //       ...prev,
  //       { _id: selectedCat?._id, title: selectedCat?.name },
  //     ]);
  //     setCategories(selectedCat ? selectedCat.childrens : []);
  //   }

  //   console.log(selectedCategory);
  // }, [selectedCategory]);

  console.log(navigation);

  return (
    <>
      <Container maxWidth="lg" className="category_container">
        <div className="category_section_header">
          <Typography variant="h6">Categories</Typography>
          <IconButton onClick={changeView}>
            {view === "scroll" ? <GridViewIcon /> : <ViewWeekIcon />}
          </IconButton>
        </div>

        <Breadcrumbs aria-label="breadcrumb">
          <Typography
            onClick={() => setSelectedCategory("")}
            sx={{ cursor: "pointer" }}
          >
            <HomeIcon />
          </Typography>

          {navigation.map((nav) => (
            <Typography
              sx={{ color: "text.primary", cursor: "pointer" }}
              key={nav.name}
              onClick={() => setSelectedCategory(nav._id)}
            >
              {nav.name}
            </Typography>
          ))}
        </Breadcrumbs>

        {/* <div className={`category_items`}>
          {categories?.map((cat, index) => (
            <>
              <div className="category_item">
                <Card>
                  <img src={cat?.icon} alt="icon" style={{height: }}/>
                </Card>
              </div>
            </>
          ))}
        </div> */}

        {/* <Box
          sx={{
            overflowX: "scroll",
            width: "100%",
            padding: 2,
            "&::-webkit-scrollbar": {
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
              borderRadius: "4px",
              width: "20%",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          }}
        >
          <Stack direction="row" spacing={2}>
            {categories.map((category, index) => (
              <Box
                key={index}
                onClick={() => setSelectedCategory(category._id)}
                sx={{
                  minWidth: "120px",
                  textAlign: "center",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: selectedCategory === category._id ? 3 : 1, // Higher shadow on active
                  backgroundColor:
                    selectedCategory === category._id ? "#e0f7fa" : "#f5f5f5", // Different background for active
                  border:
                    selectedCategory === category._id
                      ? "2px solid #00796b"
                      : "2px solid transparent", // Border for active
                  cursor: "pointer",
                  transition: "all 0.3s ease", // Smooth transition
                }}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginTop: "15px",
                  }}
                />
                <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box> */}

        {/* Scroll View */}
        {view === "scroll" && (
          <Box
            sx={{
              overflowX: "scroll",
              width: "100%",
              padding: 2,
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "4px",
                width: "20%",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            <Stack direction="row" spacing={2}>
              {categories.map((category, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedCategory(category._id)}
                  sx={{
                    minWidth: "120px",
                    textAlign: "center",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: selectedCategory === category._id ? 3 : 1,
                    backgroundColor:
                      selectedCategory === category._id ? "#e0f7fa" : "#f5f5f5",
                    border:
                      selectedCategory === category._id
                        ? "2px solid #00796b"
                        : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      marginTop: "15px",
                    }}
                  />
                  <Typography variant="h6" component="div" sx={{ padding: 1 }}>
                    {category.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        )}

        {/* Grid View */}
        {view === "grid" && (
          <Grid container spacing={2}>
            {categories.map((category, index) => (
              <Grid item xs={4} sm={6} md={1.5} key={index}>
                <Card
                  onClick={() => setSelectedCategory(category._id)}
                  sx={{
                    padding: 2,
                    textAlign: "center",
                    boxShadow: selectedCategory === category._id ? 3 : 1,
                    backgroundColor:
                      selectedCategory === category._id ? "#e0f7fa" : "#f5f5f5",
                    border:
                      selectedCategory === category._id
                        ? "2px solid #00796b"
                        : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      marginBottom: "15px",
                    }}
                  />
                  <Typography variant="h6">{category.name}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default Category;
