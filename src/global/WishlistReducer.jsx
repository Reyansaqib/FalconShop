export const WishlistReducer=(state,action)=>{
    var {shoppingWishlist}=state
    var product
    switch(action.type){
        case "add_To_Wishlist":
            const check=shoppingWishlist.find((item=>item.id==action.id))
            if(check){
                return state
            }
            else{
                product=action.product
                return{
                    shoppingWishlist:[product,...shoppingWishlist]
                }
            }
            break
        case "remove_From_Wishlist" :
            const remainingWishlist=shoppingWishlist.filter((item=>item.id!==action.id)) 
            return{
                shoppingWishlist:[...remainingWishlist]
            }
            break

    }
}