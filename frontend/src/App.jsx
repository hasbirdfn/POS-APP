import { Row } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import ProductDetail from "./components/ProductDetail";
import Category from "./components/Category";
import Order from "./components/Order";
import { DarkMode } from "./context/DarkMode";
import { useContext, useEffect } from "react";

function App() {
  const { isDarkMode } = useContext(DarkMode);

  // Gunakan useEffect untuk mengubah class pada body saat mode berubah
  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <NavbarComponent />
      <div className="container-fluid mt-3" style={{ paddingTop: '60px' }}>
        <Row>
          <Category />
          <ProductDetail />
          <Order />
        </Row>
      </div>
    </>
  );
}

export default App;
