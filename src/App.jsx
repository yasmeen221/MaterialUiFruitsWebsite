// import CardCom from "./components/CardCom";
import GroupImage from "./components/product/GroupImage";
import Header from "./components/Header";
import SliderHome from "./components/SliderHome";
import CardBest from "./components/cards/CardBest";
import SearchCom from "./components/search/SearchCom";
import Product from "./components/product/Product";
import FruitsHealthCom from "./components/FruitsHealthCom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <SearchCom />
      <Header />
      <SliderHome />
      <GroupImage />
      <CardBest />
      <Product />
      <FruitsHealthCom />
      <Footer />
    </>
  );
}

export default App;
