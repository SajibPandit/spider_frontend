import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { drawerLinks } from "@/lib/data/drawerLinks";
import { orangeColor } from "@/lib/data/commonData";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

export default function DrawerList({ toggleDrawer }) {
  return (
    <>
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
              backgroundColor: orangeColor,
              padding: "20px 0",
            }}
          >
            <div
              className="profile_photo"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Box
                sx={{
                  height: 100,
                  width: 100,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AddAPhotoIcon style={{ fontSize: "50px" }} />
              </Box>
              <Typography variant="h6" textAlign="center" color="#fff">
                User
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  color: orangeColor,
                  borderRadius: "20px",
                  padding: "10px 20px",
                  "&:hover": {
                    backgroundColor: "#ddd",
                    transition: ".4s",
                  },
                }}
              >
                Edit Profile
              </Button>
            </div>
          </Box>
          <List>
            {drawerLinks.map((data) => (
              <Link key={data.id} href={data.url}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon color={orangeColor}>{data.icon}</ListItemIcon>
                    <ListItemText primary={data.title} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Link>
            ))}
          </List>
        </Box>

        <Stack
          spacing={2} // Adjust spacing between buttons
          direction="column"
          alignItems="center"
          marginBottom={"10px"}
        >
          <Link href={"/login"}>
            <Button
              variant="contained" // Solid filled button
              sx={{
                backgroundColor: orangeColor, // Primary color
                color: "#fff", // Text color
                borderRadius: "20px",
                "&:hover": {
                  backgroundColor: "#115293", // Darken on hover
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button
              variant="outlined"
              sx={{
                color: "#333",
                borderColor: orangeColor, // Border color
                borderRadius: "20px",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "#f1f1f1", // Light background on hover
                  borderColor: "#115293", // Darker border on hover
                },
              }}
            >
              New Here? Signup
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
}
