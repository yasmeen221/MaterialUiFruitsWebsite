import image1 from "../../assets/img4.jpg";
import image2 from "../../assets/img5.jpg";
import image3 from "../../assets/img6.jpg";
import image4 from "../../assets/img1.jpg";

import Container from "@mui/material/Container";
import { Box, Stack, styled, Typography, Button, Divider } from "@mui/material";

import { Grid } from "@mui/material";

const StyledBox = styled(Box)({
  height: "80%",
  width: "90%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
// const StyledTypography = styled(Typography)({
//   // margin: "25% 50px 25% 50px",
//   background: "white",
//   opacity: "0.8",
// });
const GroupImage = () => {
  return (
    <>
      <Container sx={{ marginTop: "40px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", margin: "40px" }}
        >
          Super Offer
        </Typography>
        <Grid
          container
          spacing={2}
          direction={{ xs: "row", sm: "column", md: "row" }}
        >
          {/* 1 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            // sx={{ height: { xs: "100%", sm: "100%", md: "100%" } }}
          >
            {/* <Box
              sx={{
                height: "100%",
              }}
            > */}
            <StyledBox
              sx={{
                // height: "90%",
                height: { xs: "100%", sm: "100%", md: "90%" },

                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                backgroundImage: `url(${image1})`,
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  color: "white",
                  // background: "white",
                  // opacity: "0.8",
                  // width: "50%",
                  // height: "50%",
                  textAlign: "center",
                  height: { xs: "100%", sm: "50%", md: "50%" },

                  padding: { xs: 7, sm: 4, md: 0 },
                  // width: { xs: "100%", sm: "40%", md: "40%" },
                }}
              >
                <Stack direction="column" spacing={2}>
                  <Typography fontWeight="bold" variant="h5">
                    Orange Fruit
                    <Divider
                      sx={{
                        color: "white",
                        width: "50%",
                        textAlign: "center",
                        marginLeft: "35px",
                      }}
                    />
                  </Typography>
                  <Typography fontWeight="bold" variant="h4">
                    $180.00
                  </Typography>
                  <Typography>
                    <Button
                      sx={{
                        color: "white",

                        borderRadius: "40px",
                        borderColor: "white",
                        "&:hover": {
                          backgroundColor: "#66cc33",
                          borderColor: "white",
                        },
                      }}
                      variant="outlined"
                    >
                      Learn More
                    </Button>
                  </Typography>
                </Stack>
              </Box>
            </StyledBox>
            {/* </Box> */}
            {/* <Box sx={{ height: "100%" }}>
              <img
                src={image1}
                alt="Image 4"
                style={{
                  width: "90%",
                  height: "80%",
                  hover: {
                    transform: "scale(1.1)",
                  },
                }}
              />
            </Box> */}
          </Grid>
          {/* 2 */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            container
            direction={{ xs: "row", sm: "row", md: "column" }}
          >
            {/* 2-1 */}
            <Grid item sx={{ height: "200px" }} xs={12} sm={6} md={4} lg={4}>
              {/* <img
                src={image2}
                alt="Image 5"
                style={{ width: "90%", height: "80%" }}
              /> */}
              <StyledBox
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundImage: `url(${image2})`,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    // background: "white",
                    // opacity: "0.8",
                    // textAlign: "center",
                    // width: "50%",
                    // height: "50%",
                    textAlign: "center",
                    height: { xs: "100%", sm: "100%", md: "80%" },
                    width: { xs: "100%", sm: "100%", md: "50%" },

                    paddingTop: { xs: 5, sm: 4, md: 0 },
                  }}
                >
                  <Stack direction="column">
                    <Typography fontWeight="bold" variant="h5">
                      Up to 70% off
                      <Divider
                        sx={{
                          color: "white",
                          width: "50%",
                          textAlign: "center",
                          marginLeft: "35px",
                          // height: "20%",
                          fontWeight: "bold",
                        }}
                      />
                    </Typography>

                    <Typography>
                      <Button
                        sx={{
                          color: "white",
                          align: "center",
                          borderRadius: "40px",
                          borderColor: "white",
                          "&:hover": {
                            backgroundColor: "#66cc33",
                            borderColor: "white",
                          },
                        }}
                        variant="outlined"
                      >
                        Learn More
                      </Button>
                    </Typography>
                  </Stack>
                </Box>
              </StyledBox>
            </Grid>
            {/* 2-2 */}
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              sx={{
                height: "200px",
                // height: { xs: "50px", sm: "100px", md: "200px", lg: "200px" },
              }}
            >
              {/* <img
                src={image3}
                alt="Image 6"
                style={{ width: "90%", height: "80%" }}
              /> */}
              <StyledBox
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  backgroundImage: `url(${image3})`,
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    // background: "white",
                    // opacity: "0.8",
                    textAlign: "center",
                    height: { xs: "100%", sm: "100%", md: "80%" },
                    width: { xs: "100%", sm: "100%", md: "50%" },

                    paddingTop: { xs: 5, sm: 4, md: 0 },
                  }}
                >
                  <Stack direction="column">
                    <Typography fontWeight="bold" variant="h5">
                      Sale 50% off
                      <Divider
                        sx={{
                          color: "white",
                          width: "50%",
                          textAlign: "center",
                          marginLeft: "35px",
                          // height: "20%",
                          fontWeight: "bold",
                        }}
                      />
                    </Typography>

                    <Typography>
                      <Button
                        sx={{
                          color: "white",

                          borderRadius: "40px",
                          borderColor: "white",
                          "&:hover": {
                            backgroundColor: "#66cc33",
                            borderColor: "white",
                          },
                        }}
                        variant="outlined"
                      >
                        Learn More
                      </Button>
                    </Typography>
                  </Stack>
                </Box>
              </StyledBox>
            </Grid>
          </Grid>

          {/* 3 */}
          <Grid item xs={12} sm={6} md={4} lg={4}>
            {/* <img
              src={image4}
              alt="Image 7"
              style={{ width: "90%", height: "80%" }}
            /> */}
            <StyledBox
              sx={{
                height: "90%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                backgroundImage: `url(${image4})`,
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  // color: "white",
                  // // background: "white",
                  // // opacity: "0.8",
                  // textAlign: "center",
                  // width: "50%",
                  // height: "50%",
                  color: "white",
                  // background: "white",
                  // opacity: "0.8",
                  textAlign: "center",
                  // width: "50%",
                  // height: "50%",
                  height: { xs: "100%", sm: "50%", md: "50%" },

                  // width: { xs: "100%", sm: "40%", md: "40%" },
                  padding: { xs: 7, sm: 4, md: 0 },
                }}
              >
                <Stack direction="column" spacing={2}>
                  <Typography fontWeight="bold" variant="h5">
                    Hand Pain
                    <Divider
                      sx={{
                        color: "white",
                        width: "50%",
                        textAlign: "center",
                        marginLeft: "35px",
                        // height: "20%",
                        fontWeight: "bold",
                      }}
                    />
                  </Typography>
                  <Typography fontWeight="bold" variant="h4">
                    $220.00
                  </Typography>
                  <Typography>
                    <Button
                      sx={{
                        color: "white",

                        borderRadius: "40px",
                        borderColor: "white",
                        "&:hover": {
                          backgroundColor: "#66cc33",
                          borderColor: "white",
                        },
                      }}
                      variant="outlined"
                    >
                      Learn More
                    </Button>
                  </Typography>
                </Stack>
              </Box>
            </StyledBox>
          </Grid>
        </Grid>
      </Container>

      {/* <hr></hr> */}
    </>
  );
};

export default GroupImage;
