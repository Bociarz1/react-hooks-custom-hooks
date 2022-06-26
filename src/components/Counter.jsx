import useCounter from "../hooks/useCounter";

function Counter() {
  const [count, dispatch] = useCounter()
  return ( 
    <>
      <h4>Counter</h4>
      <button onClick={()=>dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={()=>dispatch("DECREMENT")}>DECREMENT</button>
      <button onClick={()=>dispatch("RESET")}>RESET</button>
      Count: {count}
    </>
   );
}

export default Counter;