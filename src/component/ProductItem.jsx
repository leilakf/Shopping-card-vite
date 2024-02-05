import {useContext  } from "react";
import { CartContext } from "../context/CartContext";

import { Button, CardBody, Card } from "react-bootstrap";
function ProductItem({ product }) {

const cart=useContext(CartContext)
  return (
    <Card className="mt-5 card-bg">
      <CardBody>
        <Card.Img
          variant="top"
          src={product.image}
          height="250px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="right" 
        className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="right" className="text-light" dir="rtl">{product.price} تومان</Card.Text>
        <Button 
        onClick={() =>cart.addItemToCart(product.id)}
        className="bg-dark " style={{border:"none"}}>افزودن به سبد خرید</Button>
      </CardBody>
    </Card>
  );
}
export default ProductItem;