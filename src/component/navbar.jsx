import { Button, Navbar as NavbarBs } from "react-bootstrap"
import { BsCartCheck } from "react-icons/bs";
function Navbar() {
    return(
        <NavbarBs className=" border-bottom border-secondary">
            <NavbarBs.Collapse className="justify-content-end">
        
                <Button
                 variant="btn btn-outline-secondary"
                  className="text-white">
                < BsCartCheck className="mx-2"></ BsCartCheck>  سبد خرید
               </Button>
            </NavbarBs.Collapse>
        </NavbarBs>
    ) 
}
export default Navbar