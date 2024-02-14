import { Box, Container, Stack, Typography } from "@mui/material";

import image1 from "../assets/icone1.png";
import image2 from "../assets/icone2.png";
import image3 from "../assets/icone3.png";
import image4 from "../assets/icone4.png";

const FruitsHealthCom = () => {
  return (
    <>
      <Box sx={{ marginTop: "30px", marginBottom: "100px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", margin: "40px" }}
        >
          Fruit And Health
        </Typography>
        <Container>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 0, sm: 2, md: 5 }}
          >
            <Box
              style={{
                maxHeight: "400px",
                overflowY: "auto",
                // border: "1px solid #ccc",
                scrollbarWidth: "thin",
                scrolldelay: "5ms",
                scrollbarColor: " #66cc33 transparent",
                boxShadow: "0",
              }}
            >
              <Stack
                sx={{ maxWidth: "100%" }}
                direction={{ xs: "row", sm: "column" }}
                spacing={{ xs: 1, sm: 2, md: 7 }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "3",
                      },
                    }}
                  >
                    <img src={image1} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Purple Grapes
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      Best Superfoods for Weight Loss
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "10",
                      },
                    }}
                  >
                    <img src={image2} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Kiwi - Canada
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      America's Healthiest Superfoods for Women
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "3",
                      },
                    }}
                  >
                    <img src={image3} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Red Apple
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      Best Superfoods for Weight Loss
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "3",
                      },
                    }}
                  >
                    <img src={image1} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Purple Grapes
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      Best Superfoods for Weight Loss
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "3",
                      },
                    }}
                  >
                    <img src={image2} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Kiwi - Canada
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      America's Healthiest Superfoods for Women
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 3 }}
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
                      border: "2px dotted #66cc33 ",
                      padding: "40p",
                      "&:hover": {
                        border: "2px solid #66cc33 ",
                        backgroundColor: "white",
                        boxShadow: "3",
                      },
                    }}
                  >
                    <img src={image3} />
                  </Box>
                  <Stack
                    direction={{ xs: "row", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        "&:hover": {
                          color: "#66cc33",
                        },
                      }}
                    >
                      Red Apple
                    </Typography>
                    <Typography variant="p" color="#9e9e9e">
                      Best Superfoods for Weight Loss
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box
              sx={{
                maxWidth: "60%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                spacing={{ xs: 0, sm: 15, md: 1 }}
                sx={
                  {
                    // justifyContent: "center",
                    // alignItems: "center",
                    // display: "flex",
                  }
                }
              >
                <Box
                  sx={{
                    width: { xs: "80%", sm: "40%", md: "50%" },
                  }}
                >
                  <img src={image4} />
                </Box>
                <Box
                  sx={{
                    border: "2px dashed #66cc33  ",
                    // maxWidth: "40%",
                    borderRadius: "50%",
                    // padding: 6,
                    width: { xs: "100%", sm: "40%", md: "40%" },
                    height: { xs: "100%", sm: "40%", md: "40%" },

                    padding: { xs: 4, sm: 5, md: 6 },
                  }}
                >
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Accusantium, neque sed! Iusto, molestiae quas inventore
                    possimus quidem in ab ex.
                  </Typography>
                </Box>
              </Stack>
            </Box>
            {/* <Box sx={{ }}></Box> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FruitsHealthCom;
