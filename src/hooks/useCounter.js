import { useReducer } from "react"

function useCounter() {
   const initialState = 0
    const reducer = (state,action) => {
      switch(action){
        case "INCREMENT":
          return state+1
          case "DECREMENT":
            return state-1
          case 'RESET':
            return initialState
      }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return [count, dispatch]
}

export default useCounter;