import useChangeDocumentTitle from "../hooks/useChangeDocumentTitle";

function ChangeDocumentTitle() {
  const [name, onChangeHandler, clickHandler] = useChangeDocumentTitle()
  
  return ( 
    <>
      <h4>Change document title</h4>
      <input 
        type="text" placeholder="name of doc"
        value={name}
        onChange={onChangeHandler}
      />
      <button onClick={clickHandler}>Change name of doc</button>
    </>
   );
}

export default ChangeDocumentTitle;