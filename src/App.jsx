import Navbar from "./component/Navbar.jsx";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import { CartProvider} from "./context/CartContext";
function App() {
  return (
  <CartProvider>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}
export default App;
