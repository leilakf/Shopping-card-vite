import { useContext } from "react";
import { Button } from "react-bootstrap";
import { getProductData } from "../data/items";
import { CartContext } from "../context/CartContext";

function CartProducts({id,quantity}){
    const Cart=useContext(CartContext)
const productData=getProductData(id)
console.log(productData,"1234")
    return(

<>
<p>موضوع:{productData.title}</p>
<p>تعداد:{quantity}</p>
<p>قیمت:{productData.price *quantity}</p>
<Button size="sm" className="mb-5 text-white"  variant="btn btn-outline bg-dark"  onClick={()=>{Cart.deleteFromCart(id)}}>حذف</Button>
</>

    )
}
export default CartProducts