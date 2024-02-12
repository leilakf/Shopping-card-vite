import { useState, useContext } from "react";
import {
  Button,
  Navbar as NavbarBs,
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";
import { CartContext, CartProvider } from "../context/CartContext";
import CartProducts from "./CartProduct";
function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const Cart = useContext(CartContext);
  const CartCount = Cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  const handelShow = () => {
    setShowModal(true);
  };
  const handelClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavbarBs className=" border-bottom border-secondary">
        <NavbarBs.Collapse className="justify-content-end">
          <Button
            onClick={handelShow}
            variant="btn btn-outline-secondary"
            className="text-white"
          >
            {CartCount} <BsCartCheck className="mx-2"></BsCartCheck> سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handelClose} contentClassName="card-bg">
        <ModalHeader closeButton closeVariant="white" dir="rtl">
          <ModalBody>
            {CartCount > 0 ? (
              <>
                <h3 className="mb-4">سبد خرید </h3>
                {Cart.items.map((item) => (
                  <CartProducts
                    key={item.id}
                    id={item.id}
                    quantity={item.quantity}
                  ></CartProducts>
                ))}
                <h3>مجموع قیمت:{Cart.getTotalAmount()}</h3>
              </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}
            <Button
              onClick={handelClose}
              variant="btn btn-outline btn-secondary m-5"
            >
              بستن
            </Button>
          </ModalBody>
        </ModalHeader>
      </Modal>
    </>
  );
}
export default Navbar;
