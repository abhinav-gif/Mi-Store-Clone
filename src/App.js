import PreNavbar from './Components/PreNavBar';
import NavBar from './Components/NavBar';
import NavOptions from './Components/NavOptions';
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
import PreFooter from './Components/PreFooter';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <PreNavbar />
      <NavBar />
      <Routes>
        <Route path="/" element={<NavOptions category={data.miPhones} path="/" />} />
        <Route path="/redmiphones" element={<NavOptions category={data.redmiPhones} path="/redmiphones" />} />
        <Route path="/tv" element={<NavOptions category={data.tv} path="/tv" />} />
        <Route path="/laptops" element={<NavOptions category={data.laptop} path="/laptops" />} />
        <Route path="/lifestyle" element={<NavOptions category={data.fitnessAndLifeStyle} path="/lifestyle" />} />
        <Route path="/home" element={<NavOptions category={data.home} path="/home" />} />
        <Route path="/audio" element={<NavOptions category={data.audio} path="/audio" />} />
        <Route path="/accessories" element={<NavOptions category={data.accessories} path="/accessories" />} />
      </Routes>


      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <StarProduct products={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />
      <Routes>
        <Route exact path="/" element={<HotAccessories cover={data.hotAccessoriesCover.music} catagory={data.hotAccessories.music} />} />
        <Route exact path="/smartDevice" element={<HotAccessories cover={data.hotAccessoriesCover.smartDevice} catagory={data.hotAccessories.smartDevice} />} />
        <Route exact path="/Home" element={<HotAccessories cover={data.hotAccessoriesCover.home} catagory={data.hotAccessories.home} />} />
        <Route exact path="/mlifeStyle" element={<HotAccessories cover={data.hotAccessoriesCover.lifeStyle} catagory={data.hotAccessories.lifeStyle} />} />
        <Route exact path="/mobileAccessories" element={<HotAccessories cover={data.hotAccessoriesCover.mobileAccessories} catagory={data.hotAccessories.mobileAccessories} />} />
      </Routes>
      <Heading text={"PRODUCT REVIEWS"} />
      <ProductReviews products={data.productReviews} />
      <Heading text={"VIDEOS"} />
      <Videos Videos={data.videos} />
      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner.end} />
      <PreFooter />
      <Footer footer={data.footer} />
    </Router>);
}

export default App;
