"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Badge,
  Container,
  Drawer,
  InputBase,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DrawerList from "./Drawer";
import Image from "next/image";

export default function Header() {
  //handling sidebar toogle
  const [open, setOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [showSearch, setShowSearch] = React.useState(false);

  //Identifying screen size
  const theme = useTheme();
  const isSmallOrMedium = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  //handling drawer toogle
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="relative"
        sx={{
          backgroundColor: "#F66728",
          // transition: "0.3",
          // padding: isSmallOrMedium && showSearch ? "5px" : "0px",
          // transition: theme.transitions.create(["padding"], {
          //   duration: theme.transitions.duration.standard,
          // }),
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }}>
              <Link href={"/"}>
                <IconButton>
                  <Image
                    src={"/spider_logo-min.png"}
                    height={30}
                    width={30}
                    alt="logo"
                  />
                </IconButton>
              </Link>
            </Box>

            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Spider
            </Typography> */}

            {/* <Box sx={{ display: "flex", alignItems: "center" }}>
              <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearchSubmit();
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box> */}

            {/* <Box sx={{ flexGrow: 1 }}>
              <Paper
                component="form"
                sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearchSubmit();
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box> */}

            {!isSmallOrMedium && (
              <Box sx={{ flexGrow: 0.5 }}>
                <Paper
                  // component="form"
                  // onSubmit={handleSearchSubmit}
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "auto",
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search" }}
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <Link href={`?searchParams=${searchValue}`}>
                    <IconButton
                      type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                  </Link>
                </Paper>
              </Box>
            )}
            {isSmallOrMedium && (
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                onClick={() => setShowSearch(!showSearch)}
              >
                <SearchIcon />
              </IconButton>
            )}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <TextsmsIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <FavoriteBorderIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
          {isSmallOrMedium && (
            <>
              {showSearch && (
                <Toolbar>
                  <Paper
                    // component="form"
                    // onSubmit={handleSearchSubmit}
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Search"
                      inputProps={{ "aria-label": "search" }}
                      value={searchValue}
                      onChange={handleSearchChange}
                    />
                    <Link href={`?searchParams=${searchValue}`}>
                      <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                    </Link>
                  </Paper>
                </Toolbar>
              )}
            </>
          )}
        </Container>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
}

{
  /* <Box
              sx={{
                flexGrow: 2,
                display: "block",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Search..."
                value={searchValue}
                onChange={handleSearchChange}
                sx={{
                  backgroundColor: "white",
                  borderRadius: 1,
                  width: "60%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                }}
              />
            </Box> */
}

{
  /* <Grid container alignItems="center" spacing={2}>
              <Grid item xs="auto">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6" component="div">
                  Spider
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={8}
                md={6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
                  <TextField
                    variant="outlined"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
                    fullWidth
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "4px 0 0 4px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "white",
                        },
                        "&:hover fieldset": {
                          borderColor: "white",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearchSubmit}
                    sx={{ borderRadius: "0 4px 4px 0", padding: "10px 20px" }}
                  >
                    <SearchIcon />
                  </Button>
                </Box>
              </Grid>

              <Grid item xs="auto">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <TextsmsIcon />
                  </Badge>
                </IconButton>
              </Grid>

              <Grid item xs="auto">
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid> */
}
