import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import { Button, CardBody, Card, Form, Row, Col } from "react-bootstrap";
function ProductItem({ product }) {
  const cart = useContext(CartContext);

  const productQuantity = cart.getProductQuantity(product?.id);

  return (
    <Card className="mt-5 card-bg">
      <CardBody>
        <Card.Img
          variant="top"
          src={product.image}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="right" className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="right" className="text-light" dir="rtl">
          {product.price} تومان
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6" className="text-white">
                تعداد:{productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button onClick={()=>{cart.addItemToCart(product.id)}} sm="6" className="mx-1 bg-dark text-white" variant="btn ">
                  +
                </Button>
                <Button onClick={()=>{cart.removeItemFromCart(product.id)}}  sm="6" className="mx-1 bg-dark text-white" variant="btn ">
                  -
                </Button>
                
              </Col>
            </Form>  
            <Button onClick={()=>{cart.deleteFromCart(product.id)}}  sm="6" className="my-4 bg-light text-black" variant="btn ">
                  حذف محصول
                </Button>
          </>
        ) : (
          <Button
            onClick={() => cart.addItemToCart(product.id)}
            className="bg-dark "
            style={{ border: "none" }}
          >
            افزودن به سبد خرید
          </Button>
        )}
      </CardBody>
    </Card>
  );
}
export default ProductItem;
