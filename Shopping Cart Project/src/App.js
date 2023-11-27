import { Route, Routes } from "react-router";
import Header from "./components/Navbar/Header";
import Footer from "./components/footer/footer";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Detail from "./components/Product/Detail";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:productId" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
