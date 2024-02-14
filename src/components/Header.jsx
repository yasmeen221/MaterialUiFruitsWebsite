import { useState } from "react";
import {
  Box,
  AppBar,
  Button,
  IconButton,
  List,
  Toolbar,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";
// const pages = ["Home", "Fruits", "Shop", "Blog", "About Us", "Contact"];
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handelopenDrawer = () => {
    setOpenDrawer(true);
  };

  const styleButton = {
    fontWeight: "bold",
    color: "black",
    margin: "0 10px 0 10px",
    borderRadius: "20px",

    "&:hover": {
      color: "#66cc33",
      border: "1px solid inherit",
      borderRadius: "20px",
    },
  };
  const lists = ["Home", " Fruits", " Shop", "Blog", " About", " Contact"];
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "white",
          boxShadow: "0",
        }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Box
            as="flex"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {lists.map((list, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    ...styleButton,

                    ...(index === 0 && {
                      border: "1px solid  #66cc33",
                      backgroundColor: "#66cc33",
                      borderRadius: "20px",
                      color: "white",
                    }),
                  }}
                >
                  {list}
                </Button>
              );
            })}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" edge="start" onClick={handelopenDrawer}>
              <MenuIcon edge="end" />
            </IconButton>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
              <Box minWidth={200}>
                <List>
                  {lists.map((label) => {
                    return (
                      <ListItem key={label}>
                        <ListItemButton>
                          <ListItemText sx={{ ...styleButton }}>
                            {label}
                          </ListItemText>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
