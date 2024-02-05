import { Row,Col } from "react-bootstrap";
import {productList} from "../data/items";
import ProductItem from "../component/productItem";

const Shop=()=>{
    return(
       
        <Row xs={1} md={4} className="g-4">
            {/* <Col align="center">
                محصول
            </Col>
            <Col align="center">
                محصول
            </Col>
            <Col align="center">
                محصول
            </Col>
            <Col align="center">
                محصول
            </Col> */}
            {productList.map((item)=>(
                <Col align="center" key={item.id}>
                    <ProductItem product={item}/>
                </Col>
            ))}
            
        </Row>
    )
}
export default Shop