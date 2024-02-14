import Container from "@mui/material/Container";
import OneCard from "./OneCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CardCom = () => {
  const cardCount = 10;
  const cardNumbers = Array.from(
    { length: cardCount },
    (_, index) => index + 1
  );
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 3000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Container>
        <Carousel
          responsive={responsive}
          sx={{
            "&.element.style": {
              width: "0",
            },
          }}
        >
          {cardNumbers.map((cardNumber) => (
            <OneCard key={cardNumber} cardNumber={cardNumber} />
          ))}
        </Carousel>
      </Container>
    </>
  );
};

export default CardCom;
