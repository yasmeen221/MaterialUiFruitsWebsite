import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import SearchComTwo from "./SearchComTwo";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Typography from "@mui/material/Typography";

const SearchCom = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <>
      <Container sx={{ display: "flex", marginTop: "10px" }}>
        <Stack direction="row" spacing={2}>
          <div>
            <Button
              sx={{ color: "black" }}
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              ENG
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>ENG</MenuItem>
                        <MenuItem onClick={handleClose}>FR</MenuItem>
                        <MenuItem onClick={handleClose}>GRE</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
        <SearchComTwo />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            borderColor: "divider",

            color: "text.secondary",
            "& svg": {
              m: 1,
            },
          }}
        >
          <Button sx={{ color: "black" }}>Login</Button>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Button sx={{ color: "black" }}>Register</Button>
        </Box>
      </Container>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 30 }}
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#f9f9f9",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <Box
          sx={{
            width: "100%",
            height: "100px",
            backgroundColor: "#f9f9f9",
          }}
        > */}
        <Container
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 30 }}
          >
            <Box>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "40px",
                    background: "white",
                    borderColor: "#66cc33",
                  },
                  marginTop: "20px",
                  color: "black",
                }}
                placeholder="Search"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton type="submit" aria-label="search">
                      <SearchIcon sx={{ color: "#66cc33" }} />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "40%", sm: "25%", md: "9%" },
                height: { xs: "50%", sm: "30%", md: "9%" },
                padding: { xs: 4, sm: 3, md: 3 },
                backgroundColor: "#66cc33",
                color: "white",
                textAlign: "center",
                borderRadius: "50%",
                // display: "flex",
                marginTop: "-40px",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Fruits Organic
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  marginTop: "20px",
                  color: "black",
                  border: "1px solid  #66cc33",
                  backgroundColor: "white",
                  borderRadius: "20px",
                  width: "200px",
                }}
                startIcon={<ShoppingBasketIcon sx={{ color: "#66cc33" }} />}
              >
                0items-0.00$
              </Button>
            </Box>
          </Stack>
        </Container>
        {/* </Box> */}
      </Stack>
    </>
  );
};

export default SearchCom;
