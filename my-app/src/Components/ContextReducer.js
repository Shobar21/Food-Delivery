import react, { createContext, useContext, useReducer } from 'react'
//global state of reducer add to cart
const CartStateContext = createContext()
const CartDispatchContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          quantity: action.quantity,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ]
    case 'REMOVE':
      let newArr = [...state]
      newArr.splice(action.index, 1)
      return newArr
    case 'DROP':
      let empArray = []
      return empArray

    case 'UPDATE':
      let arr = [...state]
      arr = arr.map((food) => {
        if (food.id === action.id) {
          return {
            ...food,
            quantity: parseInt(action.quantity),
            price: action.price * parseInt(action.quantity),
          }
        }
        return food
      })
      return arr

    default:
      console.log('Error in Reducer')
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useStateCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)
