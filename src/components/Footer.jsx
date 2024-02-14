import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import image from "../assets/remove2.png";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          height: "auto",
          paddingTop: "20px",
          width: "100%",
          color: "white",
          backgroundColor: "#2c2c2c",
        }}
      >
        <Container>
          <Grid container spacing={10}>
            {/* Row 1 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography
                variant="h5"
                sx={{ "&:hover": { color: "  #66cc33" } }}
              >
                about us
              </Typography>
              <Typography>
                <img src={image} />
              </Typography>
              <Typography sx={{ color: "#9e9e9e" }}>
                With more than 15 years of experience we can proudly say that we
                are one of the best in business, a trusted supplier for more
                than 1000 companies..
              </Typography>
            </Grid>

            {/* Row 2 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography
                sx={{ "&:hover": { color: "  #66cc33" } }}
                variant="h5"
              >
                Infomation
              </Typography>
              <ul style={{ color: "#9e9e9e" }}>
                <li>New Products</li>
                <li>Top Sellers</li>
                <li>New Products</li>
                <li>Top Sellers</li>
              </ul>
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography
                sx={{ "&:hover": { color: "  #66cc33" } }}
                variant="h5"
              >
                Instagram
              </Typography>
            </Grid>

            {/* Row 4 */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography
                sx={{ "&:hover": { color: "  #66cc33" } }}
                variant="h5"
              >
                Contact us
              </Typography>
              <Typography
                sx={{
                  color: "#9e9e9e",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <HomeIcon sx={{ color: "#66cc33" }} /> Our business address is
                1063 Freelon Street, San Francisco
              </Typography>
              <Typography sx={{ color: "#9e9e9e", marginBottom: "10px" }}>
                <MobileFriendlyIcon sx={{ color: "#66cc33" }} /> + 020.566.6666
              </Typography>
              <Typography sx={{ color: "#9e9e9e", marginBottom: "10px" }}>
                <EmailIcon sx={{ color: "#66cc33" }} /> Our business address is
                1063 Freelon Street, San Francisco
              </Typography>
              <Typography sx={{ color: "#9e9e9e", marginBottom: "10px" }}>
                For Product Registration and general enquires please contact us
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ backgroundColor: "white" }} />
          <Typography sx={{ textAlign: "center" }}>
            &copy;Yameen 2024
          </Typography>
        </Container>
        {/* <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 7 }}
          >
            <Box
              sx={{
                maxWidth: "25%",
                border: "2px solid red",
              }}
            >
              <Typography>about us</Typography>
              <Typography>jjjj</Typography>
              <Typography>
                With more than 15 years of experience we can proudly say that we
                are one of the best in business, a trusted supplier for more
                than 1000 companies..
              </Typography>
            </Box>
            <Box
              sx={{
                maxWidth: "30%",
                border: "2px solid red",
              }}
            >
              <Typography>Infomation</Typography>
              <ul>
                <li>New Products</li>
                <li>Top Sellers</li>
                <li>New Products</li>
                <li>Top Sellers</li>
              </ul>
            </Box>
            <Box sx={{ border: "2px solid red" }}>
              <Typography>Instagram</Typography>
              <Typography>jjjj</Typography>
              <Typography>jjjj</Typography>
            </Box>
            <Box sx={{ border: "2px solid red" }}>
              <Typography>Contact us</Typography>
              <Typography>jjjj</Typography>
              <Typography>jjjj</Typography>
            </Box>
          </Stack>
        </Container> */}
      </Box>
    </>
  );
};

export default Footer;
