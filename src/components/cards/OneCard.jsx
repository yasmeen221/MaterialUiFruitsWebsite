import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import image1 from "../assets/image6.jpg";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const OneCard = ({ cardNumber }) => {
  const [imageUrl, setImageUrl] = useState(`../assets/image${cardNumber}.jpg`);

  useEffect(() => {
    import(`../../assets/image${cardNumber}.jpg`)
      .then((module) => setImageUrl(module.default))
      .catch((error) => console.error("Image import error", error));
  }, [cardNumber]);
  return (
    <>
      <Card
        sx={{
          maxWidth: 210,

          backgroundColor: "white",
          boxShadow: "0",
          "&:hover": {
            backgroundColor: "white",
            boxShadow: "10",
            transform: "scale(1.1)",
          },
        }}
      >
        <CardMedia
          component="img"
          width="50"
          height="120"
          image={imageUrl}
          alt={`OneCard ${cardNumber}`}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            fruits
          </Typography>
          <Stack direction="row" spacing={2}>
            <Typography
              variant="h6"
              sx={{ textAlign: "center", textDecoration: "line-through" }}
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
        </CardContent>

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
      </Card>
    </>
  );
};

export default OneCard;
