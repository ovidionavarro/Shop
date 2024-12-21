import { createContext, useState } from "react";
import { Product } from "../Components/Product/Product";

export const CartContext=createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart=product=>{
        console.log(product.id)
        const productInCartIndex=cart.findIndex((item) => item.product.id === product.id)
        console.log('este es  carrito:',cart)
        console.log('index',productInCartIndex)
        if(productInCartIndex>=0){

            const newCart=structuredClone(cart)
            newCart[productInCartIndex].quantity+=1
            return setCart(newCart)
        }

        else{
            
            
            setCart(prevState=>([
            ...prevState,{
                product,quantity:1
            }
        ]))}
    }

    const discountCart=product=>{
        const productInCartIndex=cart.findIndex((item) => item.product.id === product.id)
        console.log('este es  carrito:',cart)
        console.log('index',productInCartIndex)
        if(cart[productInCartIndex].quantity==1){
            removeFromCart(product)
        }

        else{
            
            
            const newCart=structuredClone(cart)
            newCart[productInCartIndex].quantity-=1
            return setCart(newCart)
            
        }
        
    }

    const removeFromCart=product=>{
        setCart(prevState=>prevState.filter((item) => item.product.id != product.id))
    }
    const clearCart=()=>{
        setCart([])
    }
    const buyCart=()=>{
        let cost=0
        for (let i = 0; i < cart.length; i++) {
            cost += cart[i].product.price * cart[i].quantity ; 
        }
        console.log('Ha pagado:',cost )
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            discountCart,
            buyCart
        }}>
            {children}

        </CartContext.Provider>
    )
}
