import { createContext, useContext, useReducer } from "react"

//Aqui se crea el contexto en el cual se podrá pasar las variables de un componente a otro
export const StateContext = createContext()

//StateProvider va a proveer la herramienta para pasar los datos
export const StateProvider = ({reducer, initialState, children}) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
  </StateContext.Provider>
}

//StateVlue va a permitir consumir desde cualquier componente los cambios de estado de initialState
export const useStateValue = ()=> useContext(StateContext)
