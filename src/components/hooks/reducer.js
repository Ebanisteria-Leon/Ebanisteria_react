
export const initialState = {
    basket: [],
    tempdata: 0,
    buscador:[]
}

export const actionTypes ={
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
    TEMP_DATA: "TEMP_DATA",
    BUSCADOR: "BUSCADOR"
}

export const getBasketTotal =(basket)=>{
    basket?.reduce((amount, item) => item.valor + amount, 0)
}


const reducer = (state, action)=>{
    
    switch(action.type){
        case "ADD_TO_BASKET":{
            
        let itemInCart = state.basket.find(item => item.idProducto === action.item.idProducto)
        // try {
            
        // } catch (error) {
        //     console.log(error);
        // }
        // let obtenerLocal = localStorage.getItem('producto')
        // if(obtenerLocal == null){
        //     state.basket=[]
        // }else{
        //     state.basket = JSON.parse(obtenerLocal)
        //     console.log(state.basket);
        // }

        return itemInCart ? {
            ...state,
            basket: state.basket.map(item=> 
                item.idProducto===action.item.idProducto
                ? {...item, quantity: item.quantity+1}
                :item)
        } :{
            ...state,
            basket: [...state.basket, {...action.item, quantity:action.item.quantity}],
            
        }
        
        }
        case "REMOVE_ONE_FROM_CART":{

            let itemToDelete = state.basket.find((item) => item.idProducto === action.idProducto)
            return itemToDelete.quantity > 1 
            ? {
                ...state,
                basket: state.basket.map((item) => 
                    item.idProducto === action.idProducto 
                    ? {...item, quantity: item.quantity-1}
                    :item),
            } 
            : {
                ...state,
                basket: state.basket.filter((item)=> item.idProducto !== action.idProducto),
            }
        }
        case "REMOVE_ALL_FROM_CART":{
            return{
                ...state,
                basket: state.basket.filter((item)=> item.idProducto !== action.idProducto),
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
        case "BUSCADOR":{
            // if(state.buscador.length>0){
            //     console.log("entra al local", state.buscador.length);
            //     localStorage.setItem("buscador", JSON.stringify(state.buscador))
            // }
            return{
                ...state,
                buscador:action.data
            }
        }
        default: return state;
        
    }
    
}

export default reducer