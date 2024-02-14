import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import image from "../assets/remove1.png";
import image1 from "../assets/remove2.png";
import image2 from "../assets/remove3.png";
import image3 from "../assets/remove4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  Button,
  Stack,
  Rating,
  CardActions,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
const Product = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          margin: "80px 0 50px 0",
          // color: "white",
        }}
      >
        Best Sellers Products
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 1 }}
        sx={{
          margin: "0",
          // backgroundImage: `url(${BacImage1})`,

          // backgroundRepeat: "no-repeat",
          backgroundColor: "#f3f2f5",

          // backgroundAttachment: "fixed",
          // backgroundPosition: "left top,right top",
          // backgroundSize: " 100%",
          // height: 500,
          // height: "auto",
          // width: "100%",
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        {/* <Box
          sx={{
            margin: "0",
            backgroundImage: `url(${BacImage1})`,
            backgroundRepeat: "no-repeat",
            // backgroundColor: "#fafcfc",

            // backgroundAttachment: "fixed",
            backgroundPosition: "left top,right top",
            backgroundSize: " 100%",
            height: 500,
            width: "100%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        > */}
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#f3f2f5",
                  boxShadow: "0",
                  height: "50%",
                  width: "70%",
                  // marginTop: 5,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 5 }}
                  sx={{ maxWidth: 900, alignItems: "center" }}
                >
                  {/* <CardActionArea 
                sx={{ maxWidth: 900 }}> */}
                  <CardMedia
                    component="img"
                    image={image}
                    alt="green iguana"
                    width="100"
                    height="300"
                  />
                  <CardContent>
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ marginTop: "10px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          "&:hover": {
                            color: "#66cc33",
                          },
                        }}
                      >
                        Peach Group
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "center",
                            textDecoration: "line-through",
                          }}
                        >
                          $400.00
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center", color: "#66cc33" }}
                          variant="h6"
                        >
                          $100.00
                        </Typography>
                      </Stack>

                      <Rating name="no-value" value={2} />
                      <Divider />
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                          sx={{
                            fontSize: "10",
                            backgroundColor: "#66cc33",
                            color: "white",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "#faaf00",
                            },
                          }}
                        >
                          Add card
                        </Button>
                        <IconButton aria-label="share">
                          <SearchIcon />
                        </IconButton>
                      </CardActions>
                    </Stack>
                  </CardContent>
                  {/* </CardActionArea> */}
                </Stack>
              </Card>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#f3f2f5",
                  boxShadow: "0",
                  height: "50%",
                  width: "70%",
                  // marginTop: 5,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 5 }}
                  sx={{ maxWidth: 900, alignItems: "center" }}
                >
                  {/* <CardActionArea 
                sx={{ maxWidth: 900 }}> */}
                  <CardMedia
                    component="img"
                    image={image3}
                    alt="green iguana"
                    width="100"
                    height="300"
                  />
                  <CardContent>
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ marginTop: "10px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          "&:hover": {
                            color: "#66cc33",
                          },
                        }}
                      >
                        Aurore Group
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "center",
                            textDecoration: "line-through",
                          }}
                        >
                          $400.00
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center", color: "#66cc33" }}
                          variant="h6"
                        >
                          $100.00
                        </Typography>
                      </Stack>

                      <Rating name="no-value" value={2} />
                      <Divider />
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                          sx={{
                            fontSize: "10",
                            backgroundColor: "#66cc33",
                            color: "white",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "#faaf00",
                            },
                          }}
                        >
                          Add card
                        </Button>
                        <IconButton aria-label="share">
                          <SearchIcon />
                        </IconButton>
                      </CardActions>
                    </Stack>
                  </CardContent>
                  {/* </CardActionArea> */}
                </Stack>
              </Card>
            </Container>
          </SwiperSlide>

          <SwiperSlide>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#f3f2f5",
                  boxShadow: "0",
                  height: "50%",
                  width: "70%",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 5 }}
                  sx={{ maxWidth: 900, alignItems: "center" }}
                >
                  {/* <CardActionArea 
                sx={{ maxWidth: 900 }}> */}
                  <CardMedia
                    component="img"
                    image={image2}
                    alt="green iguana"
                    width="100"
                    height="300"
                  />
                  <CardContent>
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ marginTop: "10px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          "&:hover": {
                            color: "#66cc33",
                          },
                        }}
                      >
                        Aurore Group
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "center",
                            textDecoration: "line-through",
                          }}
                        >
                          $400.00
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center", color: "#66cc33" }}
                          variant="h6"
                        >
                          $100.00
                        </Typography>
                      </Stack>

                      <Rating name="no-value" value={2} />
                      <Divider />
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                          sx={{
                            fontSize: "10",
                            backgroundColor: "#66cc33",
                            color: "white",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "#faaf00",
                            },
                          }}
                        >
                          Add card
                        </Button>
                        <IconButton aria-label="share">
                          <SearchIcon />
                        </IconButton>
                      </CardActions>
                    </Stack>
                  </CardContent>
                  {/* </CardActionArea> */}
                </Stack>
              </Card>
            </Container>
          </SwiperSlide>

          <SwiperSlide>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 5,
              }}
            >
              <Card
                sx={{
                  backgroundColor: "#f3f2f5",
                  boxShadow: "0",
                  height: "50%",
                  width: "70%",
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 5 }}
                  sx={{ maxWidth: 900, alignItems: "center" }}
                >
                  {/* <CardActionArea 
                sx={{ maxWidth: 900 }}> */}
                  <CardMedia
                    component="img"
                    image={image1}
                    alt="green iguana"
                    width="100"
                    height="300"
                  />
                  <CardContent>
                    <Stack
                      direction="column"
                      spacing={2}
                      sx={{ marginTop: "10px" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          "&:hover": {
                            color: "#66cc33",
                          },
                        }}
                      >
                        Aurore Group
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="h6"
                          sx={{
                            textAlign: "center",
                            textDecoration: "line-through",
                          }}
                        >
                          $400.00
                        </Typography>
                        <Typography
                          sx={{ textAlign: "center", color: "#66cc33" }}
                          variant="h6"
                        >
                          $100.00
                        </Typography>
                      </Stack>

                      <Rating name="no-value" value={2} />
                      <Divider />
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                      <CardActions>
                        <IconButton aria-label="add to favorites">
                          <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                          sx={{
                            fontSize: "10",
                            backgroundColor: "#66cc33",
                            color: "white",
                            borderRadius: "20px",
                            "&:hover": {
                              backgroundColor: "#faaf00",
                            },
                          }}
                        >
                          Add card
                        </Button>
                        <IconButton aria-label="share">
                          <SearchIcon />
                        </IconButton>
                      </CardActions>
                    </Stack>
                  </CardContent>
                  {/* </CardActionArea> */}
                </Stack>
              </Card>
            </Container>
          </SwiperSlide>
        </Swiper>
        {/* </Box> */}
      </Stack>
    </>
  );
};

export default Product;
