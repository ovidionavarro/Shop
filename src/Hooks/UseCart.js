import { useContext } from "react";
import { CartContext } from "../context/cart";

export const UseCart=()=>{
    const context=useContext(CartContext)
    if(context===undefined){
        throw new error('usecart must be usewithin a cartProvider')
    }
    return context
}