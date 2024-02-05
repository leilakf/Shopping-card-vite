import { Button, CardBody, Card } from "react-bootstrap";

function ProductItem({ product }) {
  return (
    <Card className="mt-5 card-bg">
      <CardBody>
        <Card.Img
          variant="top"
          src={product.image}
          height="400px"
          style={{ objectFit: "cover" }}
        />
        <Card.Title align="right" 
        className="text-light pt-4">
          {product.title}
        </Card.Title>
        <Card.Text align="right" className="text-light">{product.price}</Card.Text>
        <Button>افزودن به سبد خرید</Button>
      </CardBody>
    </Card>
  );
}
export default ProductItem;