import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/products" element={<ProductList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
