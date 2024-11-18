import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./pages/NotFound/index.jsx";
import Header from "./components/Header/index.jsx";
import Home from "./pages/Home/index.jsx";
import Film from "./pages/Film/index.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/film/:id"} element={<Film/>}/>
        <Route path={"*"} element={<NotFound/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default RoutesApp;
