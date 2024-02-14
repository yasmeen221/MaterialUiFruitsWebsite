import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import CardCom from "./CardCom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CardBest = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [activeTab, setActiveTab] = React.useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setActiveTab(newValue);
  // };
  const styleTap = {
    color: "black",
    border: "1px solid black",
    borderRadius: "20px",
    "&:hover": {
      color: "white",
      backgroundColor: " #66cc33",
    },
    margin: "10px",
  };

  return (
    <>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", margin: "40px" }}
        >
          Best Sellers Products
        </Typography>
        <Stack
          sx={{ justifyContent: "center", alignItems: "center" }}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box
            sx={{
              marginTop: "20px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                marginBottom: "10px",
                justifyContent: "center",
                alignItems: "center",

                flexDirection: { xs: "column", sm: "column ", md: "row" },
              }}
            >
              {/* <Stack
                sx={{ justifyContent: "center", alignItems: "center" }}
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              > */}
              <Tabs
                sx={{
                  color: "black",
                }}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Stack
                  sx={{ justifyContent: "center", alignItems: "center" }}
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <Tab
                    sx={{
                      ...styleTap,
                      backgroundColor: "#66cc33",
                    }}
                    label="all"
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{
                      ...styleTap,
                    }}
                    label="dried products"
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{
                      ...styleTap,
                    }}
                    label="vegetables"
                    {...a11yProps(2)}
                  />
                  <Tab
                    sx={{
                      ...styleTap,
                    }}
                    label="fruits"
                    {...a11yProps(3)}
                  />
                  <Tab
                    sx={{
                      ...styleTap,
                    }}
                    label="juice"
                    {...a11yProps(4)}
                  />
                </Stack>
              </Tabs>
              {/* </Stack> */}
            </Box>
            <CustomTabPanel value={value} index={0}>
              <CardCom />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <CardCom />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <CardCom />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <CardCom />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
              <CardCom />
            </CustomTabPanel>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default CardBest;
