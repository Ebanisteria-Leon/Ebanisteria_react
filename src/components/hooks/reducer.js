export const initialState = {
    basket: [],
    tempdata: 0
}

export const actionTypes ={
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
    TEMP_DATA: "TEMP_DATA"
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
        case "REMOVE_ONE_FROM_CART":{

            let itemToDelete = state.basket.find((item) => item.id === action.id)
            return itemToDelete.quantity > 1 
            ? {
                ...state,
                basket: state.basket.map((item) => 
                    item.id === action.id 
                    ? {...item, quantity: item.quantity-1}
                    :item),
            } 
            : {
                ...state,
                basket: state.basket.filter((item)=> item.id !== action.id),
            }
        }
        case "REMOVE_ALL_FROM_CART":{
            return{
                ...state,
                basket: state.basket.filter((item)=> item.id !== action.id),
            }
        }
        case "CLEAR_CART":
            return initialState
        case "TEMP_DATA":{
            return{
                ...state,   
                tempdata: action.id
            }
        }
        default: return state;
        
    }
    
}

export default reducer