import Navbar from "./component/Navbar.jsx";
import { Container } from "react-bootstrap";
import { Route,Routes } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Shop/>}/>
      </Routes>
    </Container>
  );
}
export default App;
