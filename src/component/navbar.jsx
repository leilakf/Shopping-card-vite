import { useState } from "react";
import {
  Button,
  Navbar as NavbarBs,
  Modal,
  ModalHeader,
  ModalBody,
  ModalTitle,
} from "react-bootstrap";
import { BsCartCheck } from "react-icons/bs";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

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
            <BsCartCheck className="mx-2"></BsCartCheck> سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal show={showModal} onHide={handelClose} contentClassName="card-bg">
        <ModalHeader closeButton closeVariant="white" dir="rtl">
          <ModalTitle>سبد خرید</ModalTitle>
          <ModalBody>محصول</ModalBody>
        </ModalHeader>
      </Modal>
    </>
  );
}
export default Navbar;
