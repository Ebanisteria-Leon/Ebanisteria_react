export const initialState = {
    basket: []
}

export const actionTypes ={
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

export const getBasketTotal =(basket)=>{
    basket?.reduce((amount, item) => item.price + amount, 0)
}


const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":{
            
            let itemInCart = state.basket.find(item => item.id === action.item.id)
        return itemInCart ? {
            ...state,
            basket: state.basket.map(item=> 
                item.id===action.item.id 
                ? {...item, quantity: item.quantity+1}
                :item)
        } :{
            ...state,
            basket: [...state.basket, {...action.item, quantity:1}],
        }

        }
        case "REMOVE_ITEM":
            const index = state.basket.findIndex((basketItem => basketItem.id === action.id))
            let newBasket = [...state.basket]
            if(index >=0){
                newBasket.splice(index, 1)
            }else{console.log("No se puede eliminar el producto");}
            return{
                ...state,
                basket: newBasket
            }
        default: return state;
    }
    
}

export default reducer