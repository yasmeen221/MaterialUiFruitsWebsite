import { Box, Typography, Button } from "@mui/material";
import BacImage1 from "../assets/bac8.jpg";
import BacImage2 from "../assets/bac4.jpg";
import BacImage3 from "../assets/bac7.jpg";
import BacImage4 from "../assets/bac5.jpg";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CssBaseline from "@mui/material/CssBaseline";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const SliderHome = () => {
  return (
    <>
      <Box>
        <CssBaseline />
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Box>
              <Box
                sx={{
                  margin: "0",
                  backgroundImage: `url(${BacImage1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "black",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 500,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "40%" },
                    padding: { xs: 3, sm: 2, md: 20 },
                  }}
                >
                  <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography
                      variant={"h6"}
                      color="tomato"
                      align="center"
                      pt={8}
                    >
                      Fruits Organic Food
                    </Typography>
                    <Typography
                      variant="h1"
                      align="center"
                      sx={{
                        fontWeight: "bold",
                        color: "#faaf00",
                      }}
                    >
                      Big Sale
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ marginBottom: "15px" }}
                    >
                      we love to change your style lorme ipsum
                    </Typography>

                    <Typography align="center" pb={8}>
                      <Button align="center" variant="outlined">
                        Learn More
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <Box
                sx={{
                  backgroundImage: `url(${BacImage2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "black",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 500,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "40%" },
                    padding: { xs: 3, sm: 2, md: 20 },
                  }}
                >
                  <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography
                      variant={"h6"}
                      color="tomato"
                      align="center"
                      pt={8}
                    >
                      Save on all Products
                    </Typography>
                    <Typography
                      variant="h1"
                      align="center"
                      sx={{ fontWeight: "bold", color: "#faaf00" }}
                    >
                      Up To 35%
                    </Typography>
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{ marginBottom: "15px" }}
                    >
                      we love to change your style lorme ipsum
                    </Typography>
                    <Typography align="center" pb={8}>
                      <Button align="center" variant="outlined">
                        Learn More
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Box
                sx={{
                  backgroundImage: `url(${BacImage3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "black",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 500,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "40%" },
                    padding: { xs: 3, sm: 2, md: 20 },
                  }}
                >
                  <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography
                      variant={"h6"}
                      color="tomato"
                      align="center"
                      pt={8}
                    >
                      Trending Styles
                    </Typography>
                    <Typography
                      variant="h1"
                      align="center"
                      sx={{ fontWeight: "bold", color: "#faaf00" }}
                    >
                      Up To 40%
                    </Typography>
                    <Typography variant="body1" align="center">
                      we love to change your style lorme ipsum
                    </Typography>
                    <Typography align="center" pb={8}>
                      <Button align="center" variant="outlined">
                        Learn More
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box>
              <Box
                sx={{
                  backgroundImage: `url(${BacImage4})`,
                  backgroundRepeat: "no-repeat",
                  backgroundColor: "black",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: 500,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "50%", md: "40%" },
                    padding: { xs: 3, sm: 2, md: 20 },
                  }}
                >
                  <Box sx={{ background: "white", opacity: "0.8" }}>
                    <Typography
                      variant={"h6"}
                      color="tomato"
                      align="center"
                      pt={8}
                    >
                      Trending Styles
                    </Typography>
                    <Typography
                      variant="h1"
                      align="center"
                      sx={{ fontWeight: "bold", color: "#faaf00" }}
                    >
                      Up To 10%
                    </Typography>
                    <Typography variant="body1" align="center">
                      we love to change your style lorme ipsum
                    </Typography>
                    <Typography align="center" pb={8}>
                      <Button align="center" variant="outlined">
                        Learn More
                      </Button>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>

      <Container
        sx={{
          marginTop: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Box
                sx={{
                  borderWidth: "40px",
                  color: "#66cc33",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  display: "flex",
                  border: "1px dotted #66cc33 ",
                  padding: "40p",
                  "&:hover": {
                    border: "1px dotted #66cc33 ",
                    backgroundColor: "white",
                    boxShadow: "10",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <DirectionsCarIcon />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", marginTop: "26px" }}>
                  FREE SHIPPING
                </Typography>
                <Typography>With €50 or more orders</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Box
                sx={{
                  borderWidth: "40px",
                  color: "#66cc33",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  display: "flex",
                  border: "1px dotted #66cc33 ",
                  padding: "40p",
                  "&:hover": {
                    border: "1px dotted #66cc33 ",
                    backgroundColor: "white",
                    boxShadow: "10",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <DirectionsCarIcon />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", marginTop: "20px" }}>
                  FREE SHIPPING
                </Typography>
                <Typography>With €50 or more orders</Typography>
              </Box>
            </Stack>
          </Box>

          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 5 }}
            >
              <Box
                sx={{
                  borderWidth: "40px",
                  color: "#66cc33",
                  width: "80px",
                  height: "80px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  display: "flex",
                  border: "1px dotted #66cc33 ",
                  padding: "40p",
                  "&:hover": {
                    border: "1px dotted #66cc33 ",
                    backgroundColor: "white",
                    boxShadow: "10",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <DirectionsCarIcon />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold", marginTop: "25px" }}>
                  FREE SHIPPING
                </Typography>
                <Typography>With €50 or more orders</Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default SliderHome;
