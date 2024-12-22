import React from "react";
// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["/", "about", "Experience", "Projects", "Contact"];

export default function Navbar(props) {
  const navigate = useNavigate();
  const location = useLocation();

  //   const store = useStore();

  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  //   this is for mobile version
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  // onClick = { handleDrawerToggle };
  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      {navItems.map((item) => (
        <ListItem
          key={item}
          disablePadding
          onClick={() => handleDrawerToggle()}
        >
          <ListItemButton sx={{ textAlign: "center" }}>
            {item === "/" ? (
              <ListItemText
                primary="Home"
                className={location.pathname == "/" ? "active-menu" : ""}
                onClick={() => navigate("/")}
              />
            ) : (
              <ListItemText
                primary={item}
                className={
                  location.pathname.split("/")[1] == item ? "active-menu" : ""
                }
                onClick={() => navigate(`/${item}`)}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </Box>
  );

  //   For Web version  start from here

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" className="my-header">
          <Toolbar>
            <div className="">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <span
                className="fw-bold fs-1 text-warning"
                style={{ textShadow: "1px 3px 2px black" }}
              >
                Amit Bhatia
              </span>
            </div>

            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => {
                if (item === "/") {
                  return (
                    <Button
                      key={item}
                      sx={{ color: "#fff" }}
                      className={
                        location.pathname == "/" ? "active-menu my-2" : "my-2"
                      }
                      onClick={() => navigate("/")}
                    >
                      Home
                    </Button>
                  );
                }
                return (
                  <Button
                    key={item}
                    sx={{ color: "#fff" }}
                    className={
                      location.pathname.split("/")[1] == item
                        ? "active-menu"
                        : ""
                    }
                    onClick={() => navigate(`/${item}`)}
                  >
                    {item}
                    {console.log(location, "llll")}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <h1>.</h1>
      </Box>
    </div>
  );
}
