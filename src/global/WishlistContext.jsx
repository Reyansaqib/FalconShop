import React, { createContext,useReducer } from "react";
import { WishlistReducer } from "./WishlistReducer";

export const WishlistContext=createContext()
const WishlistContextProvider=(props)=>{
    const [wish, wishlistdispatch] = useReducer(WishlistReducer, {shoppingWishlist:[]});
    return(
        <WishlistContext.Provider value={{...wish,wishlistdispatch}}>
            {props.children} 
        </WishlistContext.Provider>
    )
}
export default WishlistContextProvider