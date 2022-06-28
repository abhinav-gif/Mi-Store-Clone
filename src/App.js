import PreNavbar from './Components/PreNavBar';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import data from "./data/data.json"
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotMenu';
import HotAccessories from './Components/HotAccessories';
import ProductReviews from './Components/ProductReviews';
import Videos from './Components/Videos';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <StarProduct products={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/music" element={<HotAccessories cover={data.hotAccessoriesCover.music} catagory={data.hotAccessories.music} />} />
        <Route exact path="/smartDevice" element={<HotAccessories cover={data.hotAccessoriesCover.smartDevice} catagory={data.hotAccessories.smartDevice} />} />
        <Route exact path="/home" element={<HotAccessories cover={data.hotAccessoriesCover.home} catagory={data.hotAccessories.home} />} />
        <Route exact path="/lifeStyle" element={<HotAccessories cover={data.hotAccessoriesCover.lifeStyle} catagory={data.hotAccessories.lifeStyle} />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories cover={data.hotAccessoriesCover.mobileAccessories} catagory={data.hotAccessories.mobileAccessories} />} />
      </Routes>
      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReviews products={data.productReviews} />
      <Heading text={"VIDEOS"} />
      <Videos Videos={data.videos} />
      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner.end} />
      <Footer />
    </Router>);
}

export default App;
