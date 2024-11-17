import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/Header/index.jsx";

import Home from "./pages/Home/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Error from "./pages/Error/index.jsx";
import DetailProduct from "./pages/DetailProduct/index.jsx";
import Products from "./pages/Products/index.jsx";

const RoutesApp = () => {
  return (<BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="product/:id" element={<DetailProduct/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  </BrowserRouter>)
};

export default RoutesApp
